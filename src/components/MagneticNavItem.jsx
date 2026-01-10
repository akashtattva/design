import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MagneticNavItem = ({ children, href }) => {
    const elRef = useRef(null);

    useEffect(() => {
        const el = elRef.current;
        const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3" });
        const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3" });

        const mouseMove = (e) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = el.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * 0.3);
            yTo(y * 0.3);
        };

        const mouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        el.addEventListener("mousemove", mouseMove);
        el.addEventListener("mouseleave", mouseLeave);
        return () => {
            el.removeEventListener("mousemove", mouseMove);
            el.removeEventListener("mouseleave", mouseLeave);
        };
    }, []);

    return (
        <a ref={elRef} href={href} className="interactive text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors py-2 px-4 block">
            {children}
        </a>
    );
};

export default MagneticNavItem;