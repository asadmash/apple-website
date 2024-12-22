import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import ModelView from "./ModelView";
import { yellowImg } from "../utils";
import * as THREE from 'three';

function Model() {
  // STEP:5
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  // STEP:6 camera control setup for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();
  
// STEP: 7 GROUP OF THREE JS ELEMENT (MODEL)
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

// STEP: 8 ROTATION VALUE OF MODELS
const [smallRotation, setSmallRotation] = useState(0);
const [largeRotation, setLargeRotation] = useState(0);

  // STEP:2 GSAP FOR ANIAMTIONG TEXT AND VIDEOS
  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>

        {/* STEP:3 */}
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            {/* STEP:4 */}
            <ModelView 
          // STEP: 9 
            index={1}
            groupRef = {small}
            gsapType = 'view1'
            controlRef= {cameraControlSmall}
            setRotationState={setSmallRotation}
            item={model}
            size={size}
            />
          {/* // STEP: 10 */}
            <ModelView 
            index={2}
            groupRef = {large}
            gsapType = 'view2'
            controlRef= {cameraControlLarge}
            setRotationState={setLargeRotation}
            item={model}
            size={size}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Model;
