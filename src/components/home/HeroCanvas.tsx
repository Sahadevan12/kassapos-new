"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Sphere, Torus, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingSphere({ position, size, color, speed }: {
  position: [number, number, number];
  size: number;
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
    }
  });
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.6}>
      <Sphere ref={meshRef} position={position} args={[size, 64, 64]}>
        <MeshDistortMaterial
          color={color}
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </Float>
  );
}

function OrbitalRings() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });
  return (
    <group ref={groupRef}>
      <Torus args={[2.5, 0.015, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#2563EB" transparent opacity={0.4} />
      </Torus>
      <Torus args={[2.0, 0.01, 16, 100]} rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <meshBasicMaterial color="#06B6D4" transparent opacity={0.3} />
      </Torus>
      <Torus args={[3.0, 0.008, 16, 100]} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <meshBasicMaterial color="#1B3A8F" transparent opacity={0.25} />
      </Torus>
    </group>
  );
}

function ParticleField({ count = 120 }: { count?: number }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#60A5FA" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function MouseTracker({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (groupRef.current) {
      const targetX = (state.pointer.x * viewport.width) / 2;
      const targetY = (state.pointer.y * viewport.height) / 2;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetX * 0.05,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -targetY * 0.03,
        0.05
      );
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ background: "transparent" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} color="#2563EB" intensity={3} />
      <pointLight position={[-5, -3, 2]} color="#06B6D4" intensity={2} />
      <pointLight position={[0, 5, -3]} color="#1B3A8F" intensity={1.5} />

      <MouseTracker>
        <OrbitalRings />

        <FloatingSphere position={[0, 0, 0]} size={1.2} color="#1B3A8F" speed={1.5} />
        <FloatingSphere position={[2.5, 1, -1]} size={0.4} color="#2563EB" speed={2} />
        <FloatingSphere position={[-2, -1, 0.5]} size={0.3} color="#06B6D4" speed={2.5} />
        <FloatingSphere position={[1, -2, 0]} size={0.25} color="#3B82F6" speed={1.8} />

        <ParticleField count={100} />
      </MouseTracker>
    </Canvas>
  );
}
