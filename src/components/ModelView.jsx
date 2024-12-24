import { Html, PerspectiveCamera, View } from "@react-three/drei";
import React from "react";
import Lights from "./Lights";
import { Suspense } from "react";
import Model from "./Iphone";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationSize,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`border-2 border-red-500 w-full h-full ${
        index === 2 ? "right-[-100%]" : ""
      }`}
    >
      {/* ambient light */}
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />
      {/* suspense component */}
      <Suspense fallback={<Html><div>Loading...</div></Html>}>
        <Model />
      </Suspense>
    </View>
  );
};

export default ModelView;
