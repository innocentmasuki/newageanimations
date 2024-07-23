'use client'

import React from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props: any) {
  const { nodes, materials } = useGLTF("/assets/character.glb") as any;
  return (
    <group {...props} dispose={null}>
      <group position={[0.04, 1.26, 0.04]} rotation={[-Math.PI, 0, -Math.PI]} scale={1.51}>
        <primitive object={nodes.Root} />
        <skinnedMesh geometry={nodes.uswazi_man_Body001.geometry} material={materials["uswazi man .body"]}
                     skeleton={nodes.uswazi_man_Body001.skeleton} />
        <skinnedMesh geometry={nodes.uswazi_man_eyebrow001001.geometry} material={materials["uswazi man .eyebrow001"]}
                     skeleton={nodes.uswazi_man_eyebrow001001.skeleton} />
        <skinnedMesh geometry={nodes.uswazi_man_Eyelashes01001.geometry} material={materials["uswazi man .Eyelashes01"]}
                     skeleton={nodes.uswazi_man_Eyelashes01001.skeleton} />
        <skinnedMesh geometry={nodes["uswazi_man_Low-Poly001"].geometry} material={materials["uswazi man .Low-Poly"]}
                     skeleton={nodes["uswazi_man_Low-Poly001"].skeleton} />
        <skinnedMesh geometry={nodes.uswazi_man_male_casualsuit01.geometry}
                     material={materials["uswazi man .male_casualsuit01"]}
                     skeleton={nodes.uswazi_man_male_casualsuit01.skeleton} />
        <skinnedMesh geometry={nodes.uswazi_man_shoes05.geometry} material={materials["uswazi man .shoes05"]}
                     skeleton={nodes.uswazi_man_shoes05.skeleton} />
        <skinnedMesh geometry={nodes.uswazi_man_short04001.geometry} material={materials["uswazi man .short04"]}
                     skeleton={nodes.uswazi_man_short04001.skeleton} />
        <skinnedMesh geometry={nodes.uswazi_man_Teeth_Base001.geometry} material={materials["uswazi man .Teeth_Base"]}
                     skeleton={nodes.uswazi_man_Teeth_Base001.skeleton} />
        <skinnedMesh geometry={nodes.uswazi_man_tongue01001.geometry} material={materials["uswazi man .tongue01"]}
                     skeleton={nodes.uswazi_man_tongue01001.skeleton} />
      </group>
      <group position={[0.05, 1.87, -0.38]} rotation={[-0.96, 0, 0]} scale={[0.06, 0.13, 0.01]}>
        <mesh geometry={nodes.Cube069.geometry} material={materials.phone} />
        <mesh geometry={nodes.Cube069_1.geometry} material={materials["phone screen"]} />
      </group>
    </group>
  );
}

