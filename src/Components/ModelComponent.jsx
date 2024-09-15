import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ModelComponent = ({ modelPath }) => {
  // Passed modelPath as a prop that'll be used to load the specefic model in the respectice carousel card
  const canvasRef = useRef(); //###########################################################################################################

  useEffect(() => {
    const size = {
      width: 300,
      height: 300,
    };
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(size.width, size.height);

    const canvas = canvasRef.current;
    canvas.appendChild(renderer.domElement); //###########################################################################################################

    // Light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
    scene.add(directionalLight);

    // Load GLTF model
    const loader = new GLTFLoader();
    let model;
    loader.load(modelPath, (gltf) => {
      model = gltf.scene;
      scene.add(model);
    });

    // Adjusting camera position closer to the object
    camera.position.z = 0.5;

    // Animation loop for rotating the model
    const animate = () => {
      requestAnimationFrame(animate);

      if (model) {
        model.rotation.x += 0.01;
        model.rotation.z += 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Clean up

    return () => {
      canvas.removeChild(renderer.domElement);
    }; //###########################################################################################################
  }, [modelPath]);

  return <div ref={canvasRef} />; //###########################################################################################################
};

export default ModelComponent;
