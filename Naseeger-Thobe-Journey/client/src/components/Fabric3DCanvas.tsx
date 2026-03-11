import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { RoundedBox, MeshDistortMaterial, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

function FabricMesh({ color, isHovered }: { color: THREE.Color; isHovered: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { clock } = useThree();

  useFrame(() => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    if (isHovered) {
      meshRef.current.rotation.y = Math.sin(t * 1.2) * 0.35;
      meshRef.current.rotation.x = Math.sin(t * 0.8) * 0.12;
    } else {
      meshRef.current.rotation.y = Math.sin(t * 0.4) * 0.18;
      meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.08;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <RoundedBox ref={meshRef} args={[2.2, 3.2, 0.12]} radius={0.08} smoothness={4}>
        <MeshDistortMaterial
          color={color}
          distort={isHovered ? 0.3 : 0.15}
          speed={2}
          roughness={0.4}
          metalness={0.2}
          envMapIntensity={0.8}
        />
      </RoundedBox>
    </Float>
  );
}

export default function Fabric3DCanvas({ colorHex, isHovered }: { colorHex: string; isHovered: boolean }) {
  const color = new THREE.Color(colorHex);
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={1.5} color="#c9a84c" />
      <pointLight position={[-3, -2, 2]} intensity={0.8} color="#7b52ab" />
      <Environment preset="studio" />
      <FabricMesh color={color} isHovered={isHovered} />
    </Canvas>
  );
}
