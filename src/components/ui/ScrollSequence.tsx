import { useCallback, useEffect, useRef, useState } from 'react';

// ---------------------------------------------------------------------------
// Configuration — this is the single place to update once the real
// Blender-rendered frames are ready. Nothing else in this file (or in
// ScrollHero.tsx) needs to change: the loader below auto-detects whether
// the sequence exists and falls back to a static image if it doesn't.
// ---------------------------------------------------------------------------
export const HERO_FRAME_CONFIG = {
  basePath: '/hero-sequence',
  fileExtension: 'webp',
  totalFrames: 180,
  mobileTotalFrames: 90,
  // Shown for every "frame" until the real sequence is dropped into basePath.
  fallbackImage: '/command-studio.jpg',
};

export function getFramePath(frameNumber: number, totalFrames = HERO_FRAME_CONFIG.totalFrames): string {
  const digits = String(totalFrames).length;
  const padded = String(frameNumber).padStart(Math.max(digits, 3), '0');
  return `${HERO_FRAME_CONFIG.basePath}/frame-${padded}.${HERO_FRAME_CONFIG.fileExtension}`;
}

const idleSchedule = (callback: () => void) => {
  const w = window as unknown as { requestIdleCallback?: (cb: () => void) => number };
  if (typeof w.requestIdleCallback === 'function') w.requestIdleCallback(callback);
  else window.setTimeout(callback, 120);
};

/**
 * Loads a frame image sequence progressively (first frame, then nearby
 * frames, then the rest in idle-scheduled batches) and exposes a
 * ref-backed getter so a canvas render loop can pull the current frame
 * without triggering React re-renders on every scroll tick.
 *
 * If frame-001 fails to load (sequence not present yet), everything
 * transparently falls back to a single static image so the scroll/text
 * choreography keeps working while final assets are pending.
 */
export function useFrameSequence(totalFrames: number) {
  const framesRef = useRef<(HTMLImageElement | null)[]>([]);
  const fallbackImgRef = useRef<HTMLImageElement | null>(null);
  const [usingFallback, setUsingFallback] = useState(false);
  const [firstFrameReady, setFirstFrameReady] = useState(false);

  useEffect(() => {
    framesRef.current = new Array(totalFrames).fill(null);
    fallbackImgRef.current = null;
    setUsingFallback(false);
    setFirstFrameReady(false);

    let cancelled = false;

    const loadFrame = (index: number) => {
      if (cancelled || framesRef.current[index]) return;
      const img = new Image();
      img.decoding = 'async';
      img.src = getFramePath(index + 1, totalFrames);
      img.onload = () => {
        if (!cancelled) framesRef.current[index] = img;
      };
    };

    const scheduleRemaining = (start: number) => {
      let cursor = start;
      const step = () => {
        if (cancelled || cursor >= totalFrames) return;
        const batchEnd = Math.min(cursor + 6, totalFrames);
        for (; cursor < batchEnd; cursor++) loadFrame(cursor);
        idleSchedule(step);
      };
      idleSchedule(step);
    };

    const loadFallback = () => {
      const fallback = new Image();
      fallback.decoding = 'async';
      fallback.src = HERO_FRAME_CONFIG.fallbackImage;
      fallback.onload = () => {
        if (cancelled) return;
        fallbackImgRef.current = fallback;
        setUsingFallback(true);
        setFirstFrameReady(true);
      };
    };

    const first = new Image();
    first.decoding = 'async';
    first.src = getFramePath(1, totalFrames);
    first.onload = () => {
      if (cancelled) return;
      framesRef.current[0] = first;
      setFirstFrameReady(true);
      const nearby = Math.min(12, totalFrames);
      for (let i = 1; i < nearby; i++) loadFrame(i);
      scheduleRemaining(nearby);
    };
    first.onerror = loadFallback;

    return () => {
      cancelled = true;
    };
  }, [totalFrames]);

  const getFrame = useCallback(
    (index: number): HTMLImageElement | null => {
      if (usingFallback) return fallbackImgRef.current;
      const clamped = Math.max(0, Math.min(totalFrames - 1, index));
      const direct = framesRef.current[clamped];
      if (direct && direct.complete && direct.naturalWidth > 0) return direct;
      for (let i = clamped - 1; i >= 0; i--) {
        const candidate = framesRef.current[i];
        if (candidate && candidate.complete && candidate.naturalWidth > 0) return candidate;
      }
      const first = framesRef.current[0];
      return first && first.complete && first.naturalWidth > 0 ? first : null;
    },
    [totalFrames, usingFallback]
  );

  return { getFrame, usingFallback, firstFrameReady };
}
