"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, PerspectiveCamera, Environment, Stars } from "@react-three/drei";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

// 1. The main Canvas wrapper
export function Scene() {
  return (
    <div className="fixed inset-0 z-0 bg-slate-950 pointer-events-none">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={45} />
        
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
        
        {/* Core elements */}
        <DataCore />
        <ParticleSystem />
        <CameraRig />
        
        {/* Cinematic Post-Processing */}
        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.5} />
          <Noise opacity={0.04} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

// 2. Camera Rig that responds to scroll
function CameraRig() {
  useFrame((state) => {
    // Calculate global scroll progress from 0 to 1
    const scrollY = window.scrollY;
    // We bound it to a hardcoded max scroll assumption for safety, or use document height
    const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, scrollY / maxScroll));
    
    // We want the camera to "fly into" the deep space as user scrolls
    const targetZ = 15 - progress * 20; // Moves from Z=15 to Z=-5
    const targetY = progress * 3; // Slightly rises
    
    // Smoothly interpolate the camera position (lerp)
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.05);
    
    // Orbit the scene with mouse movement for interactivity
    const mouseX = (state.pointer.x * Math.PI) / 8;
    const mouseY = (state.pointer.y * Math.PI) / 8;
    
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mouseX, 0.05);
    
    // Keep camera always looking at the center DataCore
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

// 3. The Central "Data Intelligence" object
function DataCore() {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh>
          <torusKnotGeometry args={[3, 0.5, 256, 32]} />
          <meshPhysicalMaterial 
            color="#1e3a8a" 
            emissive="#3b82f6" 
            emissiveIntensity={0.6}
            roughness={0.2} 
            metalness={1}
            wireframe
          />
        </mesh>
        
        {/* Core energy sphere */}
        <mesh>
          <sphereGeometry args={[2, 64, 64]} />
          <meshPhysicalMaterial 
            color="#000000"
            emissive="#8b5cf6"
            emissiveIntensity={2}
            transmission={0.9}
            opacity={1}
            roughness={0}
          />
        </mesh>
      </Float>
    </group>
  );
}

// 4. Background Data Particles (Like Casberry)
function ParticleSystem() {
  return (
    <>
      <Sparkles count={800} scale={30} size={4} speed={0.4} opacity={0.5} color="#60a5fa" />
      <Sparkles count={400} scale={20} size={8} speed={0.2} opacity={0.9} color="#c084fc" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </>
  );
}
