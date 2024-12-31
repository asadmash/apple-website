import {
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import React from "react";
import * as THREE from "three";
import Lights from "./Lights";
import { Suspense } from "react";
import Model from "./Iphone";
import Loader from "./Loader";
// import {group} from "three";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
    >
      {/* ambient light */}
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target0={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group
        ref={groupRef}
        name={`${index === 1} ? 'small' : 'large' `}
        position={[0, 0, 0]}
      >
        {/* suspense component */}
        <Suspense
          fallback={
            <Loader/>
          }
        >
          {/* iphone */}
          <Model
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
