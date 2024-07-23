'use client'
import React, { Suspense, useState, useEffect, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Model";

function RenderCharacter() {
  const [rotation, setRotation] = useState(1);
  const [scroll, setScroll] = useState(3.5);

  function convertRange(value:number, r1:number[], r2:number[]) {
    return ((value - r1[0]) * (r2[1] - r2[0])) / (r1[1] - r1[0]) + r2[0];
  }


  const handleScroll = useCallback(() => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);

    setRotation(convertRange(scrollPercent, [0, 1], [1, 5.6]));
    setScroll(convertRange(scrollPercent, [0, 1], [3.5, 0.7]));
  },[]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "4",
      }}
    >
      <Canvas
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "1",
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={1.25} />
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.14} />
        <directionalLight intensity={0.4} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Model
            position={[0, -scroll, 3]}
            rotation={[0, rotation, 0]}
            scale={[1.5, 1.5, 1.5]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default RenderCharacter;
