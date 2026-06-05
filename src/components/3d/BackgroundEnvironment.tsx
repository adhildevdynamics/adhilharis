import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export const BackgroundEnvironment = () => {
  const groupRef = useRef<THREE.Group>(null);
  const mesh1Ref = useRef<THREE.Mesh>(null);
  const mesh2Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    // Subtle parallax reaction to mouse movement
    const targetX = (state.pointer.x * 0.2);
    const targetY = (state.pointer.y * 0.2);
    
    groupRef.current.rotation.x += 0.05 * (targetY - groupRef.current.rotation.x);
    groupRef.current.rotation.y += 0.05 * (targetX - groupRef.current.rotation.y);

    // Rotate meshes slowly
    if (mesh1Ref.current) {
      mesh1Ref.current.rotation.x += delta * 0.1;
      mesh1Ref.current.rotation.y += delta * 0.15;
    }
    if (mesh2Ref.current) {
      mesh2Ref.current.rotation.x -= delta * 0.08;
      mesh2Ref.current.rotation.z += delta * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Primary Frosted Glass Sphere */}
      <mesh ref={mesh1Ref} position={[-3, 2, -5]}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhysicalMaterial 
          color="#ffffff" 
          transmission={0.9} 
          opacity={1} 
          metalness={0.1} 
          roughness={0.2} 
          ior={1.5} 
          thickness={1} 
          clearcoat={1}
        />
      </mesh>

      {/* Secondary Dark Glassmatic Torus */}
      <mesh ref={mesh2Ref} position={[4, -2, -6]}>
        <torusGeometry args={[1.5, 0.5, 64, 100]} />
        <meshPhysicalMaterial 
          color="#000000" 
          transmission={0.6} 
          opacity={1} 
          metalness={0.5} 
          roughness={0.1} 
          ior={1.8} 
          thickness={2} 
        />
      </mesh>
    </group>
  );
};
