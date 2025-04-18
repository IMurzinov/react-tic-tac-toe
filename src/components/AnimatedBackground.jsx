import { useEffect } from "react";
import * as THREE from "three";

export default function AnimatedBackground({ onReady }) {
  useEffect(() => {
    let sw = window.innerWidth;
    let sh = window.innerHeight;

    const bits = 6;
    const depth = 24;
    const walls = 5;
    const size = 10;
    const padding = 1;
    const boxSize = size - padding * 2;

    const lineOffsets = Array.from({ length: depth }, () =>
      Math.random() > 0.5 ? 1 : 0
    );

    const blocks = [];
    const can = document.createElement("canvas");
    can.width = walls * (bits * size - size);
    can.height = depth * size;

    const ctx = can.getContext("2d");
    ctx.fillStyle = "#999"; // светлая текстура для боксов
    ctx.fillRect(0, 0, can.width, can.height);

    for (let w = 0; w < walls; w++) {
      blocks[w] = [];
      for (let y = 0; y < depth; y++) {
        blocks[w][y] = [];
        const lineoffset = lineOffsets[y];
        let x = 0;
        while (x < bits) {
          let block = Math.ceil(Math.random() * 4);
          if (x + block > bits) block = bits - x;
          ctx.fillStyle = "#555";
          ctx.fillRect(
            w * (bits * size) + (lineoffset + x - 1) * size + padding,
            y * size + padding,
            block * size - padding * 2,
            size - padding * 2
          );
          blocks[w][y].push(block);
          x += block;
        }
      }
    }

    const texture = new THREE.Texture(can);
    texture.needsUpdate = true;

    const material = new THREE.MeshLambertMaterial({
      color: 0x982fd9, // ТВОЙ ЦВЕТ 💜
      map: texture,
    });

    const container = document.getElementById("bg-container");

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(80, sw / sh, 1, 1000);
    camera.position.z = 200;
    scene.add(camera);

    // 💡 Освещение
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(1, 1, 1).normalize();
    scene.add(dirLight);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(sw, sh);
    container.appendChild(renderer.domElement);

    const tunnel = new THREE.Group();
    scene.add(tunnel);

    const rotationZ = (1 / walls) * Math.PI * 2;
    const offsetY = (bits * size) / (2 * Math.tan(rotationZ / 2));
    const groups = [];

    for (let w = 0; w < walls; w++) {
      const wall = new THREE.Group();
      wall.rotation.set(0, 0, w * rotationZ);
      tunnel.add(wall);
      groups[w] = [];

      for (let j = 0; j < depth; j++) {
        const group = new THREE.Group();
        group.position.set(0, 0, j * size);
        let x = (bits * size) / -2 + (lineOffsets[j] ? 1 : -1) * (size - padding) / 2;

        for (let i = 0; i < blocks[w][j].length; i++) {
          const width = blocks[w][j][i] * size;
          const box = new THREE.Mesh(
            new THREE.BoxGeometry(
              width - padding * 2,
              boxSize + boxSize * Math.random(),
              boxSize
            ),
            material
          );
          box.position.set(x + width / 2, offsetY, 0);
          box.rotation.set(0, 0, 0.3 * (Math.random() - 0.5));
          group.add(box);
          x += width;
        }

        wall.add(group);
        groups[w][j] = group;
      }
    }

    const animate = (time) => {
      tunnel.rotation.set(0, 0, time * 0.00005);
      for (let j = 0; j < depth; j++) {
        for (let w = 0; w < walls; w++) {
          const group = groups[w][j];
          group.position.z += 0.2;
          group.position.z %= size * depth;
        }
      }
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate(0);

    const handleResize = () => {
      sw = window.innerWidth;
      sh = window.innerHeight;
      camera.aspect = sw / sh;
      camera.updateProjectionMatrix();
      renderer.setSize(sw, sh);
    };

    window.addEventListener("resize", handleResize);

    if (typeof onReady === "function") {
      setTimeout(() => onReady(), 0); // дожидаемся полной инициализации
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      container.innerHTML = "";
    };
  }, [onReady]);

  return (
    <div
      id="bg-container"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    />
  );
}