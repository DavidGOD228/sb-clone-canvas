import React, { useState } from "react";
import * as THREE from "three";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import logo from "../../assets/logo.svg";

const Mesh = ({ color }) => {
  const gltf = useGLTF("./new_cup.glb");

  const logoTexture = useTexture(logo);

  return (
    <>
      <mesh
        castShadow
        geometry={gltf.nodes.NurbsPath_Mesh.geometry}
        material={gltf.materials["Material.002"]}
        material-color={parseInt("0x" + color)}
        material-roughness={1}
        position={[0, 0, 1]}
        scale={[1, 1, 1]}
        rotation={[2, 0, 0]}
        dispose={null}
      >
        <Decal
          position={[0, 1.025, -0.1]}
          rotation={3.1}
          scale={0.6}
          map={logoTexture}
          polygonOffset={true}
          polygonOffsetFactor={1}
          // depthTest={false}
          // depthWrite={true}
        />
      </mesh>
    </>
  );
};

export default Mesh;
