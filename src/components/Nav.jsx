import React from 'react';
import MagneticNavItem from './MagneticNavItem';

const Nav = () => (
    <nav className="fixed top-0 left-0 w-full z-40 py-8 px-8 flex justify-between items-start mix-blend-difference">
        <div className="flex flex-col gap-1">
            <span className="text-white text-sm font-helvetica tracking-wide uppercase interactive">Akash Popat.</span>
            <span className="text-[10px] text-zinc-400 font-mono">Design Portfolio</span>
        </div>
        <div className="hidden md:flex flex-col gap-1 items-end">
            <MagneticNavItem href="#writing">Recent Writing</MagneticNavItem>
            <MagneticNavItem href="#work">Projects</MagneticNavItem>
            <MagneticNavItem href="#experience">Experience</MagneticNavItem>
            <MagneticNavItem href="#contact">Contact</MagneticNavItem>
        </div>
    </nav>
);

export default Nav;