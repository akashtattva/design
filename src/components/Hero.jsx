import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import MagneticNavItem from './MagneticNavItem';

const Hero = () => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Staggered Text Reveal from Mask
            gsap.from(".hero-line", {
                y: 150,
                skewY: 7,
                duration: 1.8,
                stagger: 0.1,
                ease: "power4.out",
                delay: 0.2
            });

            // Subtext fade
            gsap.from(".hero-sub", {
                opacity: 0,
                y: 20,
                duration: 1,
                delay: 1,
                ease: "power2.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="h-screen flex flex-col justify-start pt-28 md:pt-36 px-6 md:px-12 max-w-screen-2xl mx-auto relative">
            <div className="relative z-10 mix-blend-screen space-y-2">
                <div className="clip-text-reveal">
                    <h1 className="hero-line text-[12vw] md:text-[8vw] font-departure text-white tracking-tighter leading-[0.85] text-glow">
                        Product Designer
                    </h1>
                </div>
                <div className="clip-text-reveal">
                    <h1 className="hero-line text-[12vw] md:text-[8vw] font-chakra text-zinc-600 tracking-tighter leading-[0.85]">
                        Creative Technologist
                    </h1>
                </div>
                <div className="">
                    <h1 className="hero-line text-[12vw] md:text-[8vw] font-medium text-white tracking-tighter leading-[0.85] text-glow">
                    </h1>
                </div>

            </div>
            
            <div className="hero-sub mt-12 md:mt-16 max-w-2xl">
                <p className="text-lg md:text-xl text-white font-mono leading-relaxed">
                    Hi, I am Akash. I am a designer who is all about solving complex problems, reverse-engineering things, and taking extensive notes. I view AI as a collaborative, creative partner that requires human oversight; my foundational knowledge is essential for shaping its output and steering the underlying conceptual framework.
                    <br />
                    <br />
                    Please check out:
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                    <MagneticNavItem href="#">
                        Resume
                        <span className="inline-block align-middle ml-1" aria-hidden="true">
                            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" className="inline" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 13L13 7M13 7H7M13 7V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </MagneticNavItem>
                    <MagneticNavItem href="#">
                        About Me
                        <span className="inline-block align-middle ml-1" aria-hidden="true">
                            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" className="inline" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 13L13 7M13 7H7M13 7V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </MagneticNavItem>
                    <MagneticNavItem href="https://akashtattva.github.io/">
                        Notes
                        <span className="inline-block align-middle ml-1" aria-hidden="true">
                            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" className="inline" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 13L13 7M13 7H7M13 7V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </MagneticNavItem>
                    <MagneticNavItem href="https://akashspace.substack.com/">
                        Blog
                        <span className="inline-block align-middle ml-1" aria-hidden="true">
                            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" className="inline" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 13L13 7M13 7H7M13 7V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </MagneticNavItem>
                </div>
            </div>
        </section>
    );
};

export default Hero;