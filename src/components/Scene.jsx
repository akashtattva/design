import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Scene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Setup
        const scene = new THREE.Scene();
        // Deep fog for infinite void feel
        scene.fog = new THREE.FogExp2(0x050505, 0.03); 

        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.z = 8;
        camera.position.y = 0;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        // --- Geometry Construction: The "Core" ---
        const group = new THREE.Group();

        // 1. Inner Wireframe Icosahedron (The Structure)
        const geo1 = new THREE.IcosahedronGeometry(1.5, 1);
        const mat1 = new THREE.MeshBasicMaterial({ color: 0x4a5759, wireframe: true, transparent: true, opacity: 0.3 });
        const mesh1 = new THREE.Mesh(geo1, mat1);
        group.add(mesh1);

        // 2. Floating Points (The Data)
        const geo2 = new THREE.IcosahedronGeometry(2.2, 2);
        const pos = geo2.attributes.position.array;
        const pointsGeo = new THREE.BufferGeometry();
        pointsGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        const pointsMat = new THREE.PointsMaterial({ size: 0.03, color: 0xc9ada7 }); // zinc-500
        const points = new THREE.Points(pointsGeo, pointsMat);
        group.add(points);

        // 3. Glowing Core
        const geo3 = new THREE.SphereGeometry(0.8, 32, 32);
        const mat3 = new THREE.MeshBasicMaterial({ color: 0x000000 }); // Obscures background lines
        const mesh3 = new THREE.Mesh(geo3, mat3);
        group.add(mesh3);

        scene.add(group);

        // --- Lighting ---
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 2);
        dirLight.position.set(5, 5, 5);
        scene.add(dirLight);

        // --- Interactions ---
        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (e) => {
            mouseX = (e.clientX - window.innerWidth / 2) * 0.001;
            mouseY = (e.clientY - window.innerHeight / 2) * 0.001;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // --- Scroll Animation Timeline (The Core "Travels") ---
        // We use GSAP to control the 3D Group based on scroll position
        // This creates the continuous narrative
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1.5, // Smooth scrubbing
            }
        });

        // Phase 1: Hero -> Work (Object moves right, rotates)
        tl.to(group.rotation, { x: 1, y: 2, duration: 10 }, 0)
          .to(group.position, { x: 2, z: -2, duration: 10 }, 0)
          .to(camera.position, { z: 6, duration: 10 }, 0);

        // Phase 2: Work -> Experience (Object moves left, expands)
        tl.to(group.rotation, { x: 3, y: 0, duration: 10 }, 10)
          .to(group.position, { x: -2.5, y: 1, duration: 10 }, 10)
          .to(mesh1.material, { opacity: 0.1, duration: 5 }, 10); // Fade wireframe

        // Phase 3: Experience -> Contact (Object centers, disperses)
        tl.to(group.position, { x: 0, y: 0, z: 0, duration: 10 }, 20)
          .to(points.material, { size: 0.08, color: 0xffffff, duration: 5 }, 20)
          .to(group.rotation, { y: 4, duration: 10 }, 20);


        // Render Loop
        const animate = () => {
            // Check if component is still mounted
            if (!mountRef.current) return;
            
            requestAnimationFrame(animate);

            // Mouse parallax (Subtle)
            group.rotation.x += (mouseY - group.rotation.x) * 0.05;
            group.rotation.y += (mouseX - group.rotation.y) * 0.05;

            // Idle Animation
            mesh1.rotation.z += 0.002;
            points.rotation.y -= 0.001;

            renderer.render(scene, camera);
        };
        animate();

        // Cleanup
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            if(mountRef.current && mountRef.current.contains(renderer.domElement)) {
                mountRef.current.removeChild(renderer.domElement);
            }
            // Kill ScrollTriggers created in this component
            // We use ScrollTrigger.getAll() which might be too aggressive if other components use it,
            // but since this is the main driver, it's safer to just kill the timeline if we captured it, 
            // or let React cleanup handle it. 
            tl.kill(); 
            // Better to kill specific timeline.
        };
    }, []);

    return <div ref={mountRef} className="fixed top-0 left-0 w-full h-screen -z-10 pointer-events-none" />;
};

export default Scene;