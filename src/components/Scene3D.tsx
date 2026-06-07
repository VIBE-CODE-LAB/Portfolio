import { useState, useEffect, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars, Environment } from "@react-three/drei";
import type { Mesh } from "three";

function FloatingShape({
  position,
  color,
  shape = "icosa",
  speed = 1,
}: {
  position: [number, number, number];
  color: string;
  shape?: string;
  speed?: number;
}) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15 * speed;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2 * speed;
  });

  const geo = () => {
    switch (shape) {
      case "torus":
        return <torusGeometry args={[0.8, 0.28, 32, 96]} />;
      case "knot":
        return <torusKnotGeometry args={[0.6, 0.22, 128, 32]} />;
      case "octa":
        return <octahedronGeometry args={[1, 0]} />;
      case "dodeca":
        return <dodecahedronGeometry args={[1, 0]} />;
      case "box":
        return <boxGeometry args={[1.2, 1.2, 1.2]} />;
      default:
        return <icosahedronGeometry args={[1, 0]} />;
    }
  };

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.8}>
      <mesh ref={ref} position={position}>
        {geo()}
        <MeshDistortMaterial
          color={color}
          distort={0.35}
          speed={1.8}
          roughness={0.15}
          metalness={0.85}
          emissive={color}
          emissiveIntensity={0.35}
        />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 55 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <fog attach="fog" args={["#0a0420", 8, 20]} />
        <ambientLight intensity={0.35} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#5ee9ff" />
        <pointLight position={[-5, -3, -2]} intensity={1.8} color="#ff5ec4" />
        <Stars radius={60} depth={40} count={isMobile ? 800 : 2000} factor={3} fade speed={1} />
        
        {isMobile ? (
          <>
            <FloatingShape position={[0.8, 1.5, -2]} color="#5ee9ff" shape="knot" speed={0.9} />
            <FloatingShape position={[-0.8, -1.8, -1.5]} color="#ff5ec4" shape="dodeca" speed={0.7} />
          </>
        ) : (
          <>
            <FloatingShape position={[1.8, 0.8, 0]} color="#5ee9ff" shape="knot" speed={0.9} />
            <FloatingShape position={[2.8, -1.0, -1]} color="#ff5ec4" shape="icosa" speed={1.2} />
            <FloatingShape position={[0.2, 2.0, -2]} color="#a78bfa" shape="dodeca" speed={0.7} />
            <FloatingShape position={[-2.2, 1.8, -1.5]} color="#a3e635" shape="octa" speed={1} />
          </>
        )}
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}

export function MiniShape({ shape, color }: { shape: string; color: string }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 3.2], fov: 50 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 3, 3]} intensity={2} color={color} />
        <pointLight position={[-3, -2, -1]} intensity={1.2} color="#ffffff" />
        <FloatingShape position={[0, 0, 0]} color={color} shape={shape} speed={1.2} />
      </Suspense>
    </Canvas>
  );
}
