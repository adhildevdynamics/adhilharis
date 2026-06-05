import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import { BackgroundEnvironment } from './BackgroundEnvironment';
import { ScrollManager } from './ScrollManager';

interface SceneProps {
  children: React.ReactNode;
}

export const Scene = ({ children }: SceneProps) => {
  return (
    <div className="fixed inset-0 w-full h-full bg-light">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className="!pointer-events-auto">
        {/* Studio Lighting */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={3} color="#ffffff" castShadow />
        <pointLight position={[-10, -10, -5]} intensity={2} color="#f0f0f0" />
        
        <ScrollControls pages={4} damping={0.2}>
          <ScrollManager />
          <BackgroundEnvironment />
          
          <Scroll html style={{ width: '100%', height: '100%' }}>
            {children}
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
};
