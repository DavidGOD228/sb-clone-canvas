import { useThree } from "@react-three/fiber";
import React, { Suspense, useEffect, lazy } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

const MeshComponent = lazy(() => import("./Mesh"));

export const Scene = ({ color }) => {
  const {
    scene,
    camera,
    gl: { domElement, shadowMap },
  } = useThree();

  useEffect(() => {
    const directionalLight = scene.children[1];
    scene.background = new THREE.Color(0xf1f1f1);
    scene.fog = new THREE.Fog(0xf1f1f1, 20, 100);
    camera.fov = 50;
    directionalLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
    shadowMap.enabled = true;
  }, []);

  return (
    <>
      <OrbitControls args={[camera, domElement]} />
      <hemisphereLight
        skyColor={new THREE.Color(0xffffff)}
        groundColor={new THREE.Color(0xffffff)}
        intensity={0.61}
        position={[0, 50, 0]}
      />
      <directionalLight
        color={new THREE.Color(0xffffff)}
        intensity={0.54}
        position={[-8, 12, 8]}
        castShadow
      />
      <Suspense fallback={null}>
        <MeshComponent color={color} />
      </Suspense>
    </>
  );
};

export default Scene;
