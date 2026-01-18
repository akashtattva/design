import React, { useRef, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectDisclosure from './ProjectDisclosure';

const Projects = () => {
    const containerRef = useRef(null);
    const [openIndex, setOpenIndex] = useState(null);

    useLayoutEffect(() => {
         const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top bottom",
                onEnter: () => gsap.to(containerRef.current, { opacity: 1, y: 0, duration: 1 })
            });
         }, containerRef);
         return () => ctx.revert();
    }, []);

    const works = [
        { name: "Chronos OS", category: "Spatial Interface • CLICK TO OPEN", year: "2024" },
        { name: "Nebula AI", category: "Generative Engine • CLICK TO OPEN", year: "2023" },
        { name: "Vanguard", category: "Fintech 3D Viz • CLICK TO OPEN", year: "2023" },
        { name: "Lumina", category: "WebGL Experience • CLICK TO OPEN", year: "2022" },
    ];

    const handleToggle = (i) => {
        setOpenIndex((prev) => (prev === i ? null : i));
    };

    return (
        <section id="work" ref={containerRef} className="py-section px-6 max-w-screen-2xl mx-auto opacity-0 translate-y-20">
            <div>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-departure text-foreground opacity-30 tracking-tighter mb-8 leading-none select-none">Selected Works</h2>
            </div>
            <br />
            <div className="flex flex-col">
                {works.map((work, i) => (
                    <ProjectDisclosure
                        key={i}
                        {...work}
                        index={i}
                        isOpen={openIndex === i}
                        onToggle={() => handleToggle(i)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;