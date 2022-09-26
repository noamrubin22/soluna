import { ThreeElements, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

export const Moon = (props: ThreeElements["mesh"]) => {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((state, delta) => (ref.current.rotation.x += 0.002));
  return (
    <mesh
      {...props}
      ref={ref}
      scale={1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      geometry={new THREE.SphereGeometry(1, 14, 14)}
      material={
        new THREE.MeshPhongMaterial({
          color: hovered
            ? new THREE.Color("rgb(147,112,219)")
            : new THREE.Color("gray"),
          map: new THREE.TextureLoader().load("textures/diffuse_moon.jpg"),
          bumpMap: new THREE.TextureLoader().load("textures/bump_moon.jpg"),
          bumpScale: 0.07,
        })
      }
    />
  );
};
