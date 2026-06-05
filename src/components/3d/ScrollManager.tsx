import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export const ScrollManager = () => {
  const scroll = useScroll();
  const targetCameraPos = useRef(new THREE.Vector3(0, 0, 5));

  useFrame((state, delta) => {
    if (!scroll) return;
    
    // offset goes from 0 (top) to 1 (bottom)
    const offset = scroll.offset;
    
    // Animate camera position based on scroll offset
    // Scene starts at z=5, moves closer or down depending on the section
    
    // Section 1: Hero (offset 0 - 0.25)
    if (offset < 0.25) {
      targetCameraPos.current.set(0, 0, 5);
    } 
    // Section 2: Projects (offset 0.25 - 0.6)
    else if (offset < 0.6) {
      // Zoom into the scene slightly and move down
      const progress = (offset - 0.25) / 0.35;
      targetCameraPos.current.set(0, -progress * 5, 4 - progress);
    } 
    // Section 3: Timeline (offset 0.6 - 1.0)
    else {
      // Move sideways or further down for the timeline
      const progress = (offset - 0.6) / 0.4;
      targetCameraPos.current.set(progress * 5, -5 - progress * 2, 3);
    }

    // Smoothly interpolate the camera position
    state.camera.position.lerp(targetCameraPos.current, delta * 3);
  });

  return null;
};
