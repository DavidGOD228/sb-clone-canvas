import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
// import ColorPicker from "./components/ColorPicker";
import Scene from "../components/canvas/Scene";
// import { COLORS } from "./constants/colors";
import * as THREE from "three";
import ColorPicker from "../components/canvas/ColorPicker";

const updMesh = (c) =>
  new THREE.MeshPhongMaterial({ color: parseInt("0x" + c), shininess: 10 });

export default function Customizer() {
  const [activeOption, setActiveOption] = useState("legs");
  const [color, setColor] = useState("006241");

  const [newMaterialOpt, setNewMaterialOpt] = useState(
    updMesh(color)
  );

  useEffect(() => {
    setNewMaterialOpt(updMesh(color));
  }, [color]);

  return (
    <>
      {/* <OptionsMenu
        activeOption={activeOption}
        setActiveOption={setActiveOption}
      /> */}
      <Canvas className="w-full h-full">
        <Scene color={color} />
      </Canvas>
      <ColorPicker color={color} setColor={(color) => setColor(color)} />

      <div className="controls">
        {/* <div className="info">
          <div className="info__message">
            <p>
              <strong>&nbsp;Grab&nbsp;</strong> to rotate chair.{' '}
              <strong>&nbsp;Scroll&nbsp;</strong> to zoom.{' '}
              <strong>&nbsp;Drag&nbsp;</strong> swatches to view more.
            </p>
          </div>
        </div> */}
      </div>
      {/* <div className="frame">
        <h1 className="frame__title">
          3D Model Color Customizer App with React-three-fiber
        </h1>
      </div> */}
    </>
  );
}
