import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.1 });
            gsap.to(followerRef.current, { x: e.clientX, y: e.clientY, duration: 0.5, ease: "power2.out" });
        };

        const handleHoverStart = () => {
            gsap.to(followerRef.current, { scale: 3, backgroundColor: "rgba(255,255,255,0.1)", mixBlendMode: "difference", duration: 0.3 });
            gsap.to(cursorRef.current, { scale: 0, duration: 0.3 });
        };
        
        const handleHoverEnd = () => {
            gsap.to(followerRef.current, { scale: 1, backgroundColor: "transparent", mixBlendMode: "normal", duration: 0.3 });
            gsap.to(cursorRef.current, { scale: 1, duration: 0.3 });
        };

        window.addEventListener('mousemove', moveCursor);
        
        // Add listeners to interactive elements
        // Note: In React, this might not catch elements added later or dynamic ones effectively if run only once.
        // A better approach in React is a Context or a globally accessible ref/hook, but for this port, we'll stick to the original logic
        // and perhaps re-run it or use event delegation if needed. For now, simple port.
        const interactives = document.querySelectorAll('a, button, .interactive');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', handleHoverStart);
            el.addEventListener('mouseleave', handleHoverEnd);
        });

        // Better way: Event Delegation for dynamic content
        const handleMouseOver = (e) => {
            if (e.target.closest('.interactive') || e.target.closest('a') || e.target.closest('button')) {
                handleHoverStart();
            }
        };
        const handleMouseOut = (e) => {
            if (e.target.closest('.interactive') || e.target.closest('a') || e.target.closest('button')) {
                handleHoverEnd();
            }
        };
        // Overwriting the previous specific listeners with delegation for robustness in SPA
        document.body.addEventListener('mouseover', handleMouseOver);
        document.body.addEventListener('mouseout', handleMouseOut);


        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.body.removeEventListener('mouseover', handleMouseOver);
            document.body.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"></div>
            <div ref={followerRef} className="fixed top-0 left-0 w-8 h-8 border border-accent/30 rounded-full pointer-events-none z-[99] -translate-x-1/2 -translate-y-1/2 transition-colors"></div>
        </>
    );
};

export default CustomCursor;