import React from 'react';

const StyledButton = ({ href, children }) => (
  <a 
    href={href} 
    className="group flex min-w-[180px] decoration-0 transition-transform active:scale-95 cursor-pointer outline-none w-auto h-[50px] pr-6 pl-6 relative items-center justify-center" 
    style={{ backgroundColor: 'var(--accent)', borderRadius: '8px', opacity: 1, border: 'none' }}
  >
      {/* Glow Layer */}
      <div className="pointer-events-none transition-opacity ease-in-out duration-[1200ms] group-hover:opacity-0 opacity-100 absolute top-0 right-0 bottom-0 left-0" style={{ background: 'radial-gradient(15% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '8px', filter: 'blur(15px)' }}></div>

      {/* Glow Hover Layer */}
      <div className="pointer-events-none transition-opacity ease-in-out duration-[1200ms] group-hover:opacity-100 opacity-0 absolute top-0 right-0 bottom-0 left-0" style={{ background: 'radial-gradient(60.6% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '8px', filter: 'blur(18px)' }}></div>

      {/* Stroke Layer */}
      <div className="pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] group-hover:opacity-0 opacity-100 absolute top-0 right-0 bottom-0 left-0" style={{ background: 'radial-gradient(10.7% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '8px' }}></div>

      {/* Stroke Hover Layer */}
      <div className="pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] group-hover:opacity-100 opacity-0 absolute top-0 right-0 bottom-0 left-0" style={{ background: 'radial-gradient(60.1% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '8px' }}></div>

      {/* Fill Layer */}
      <div className="rounded-[7px] absolute top-[1px] right-[1px] bottom-[1px] left-[1px]" style={{ backgroundColor: 'var(--accent)', opacity: 1 }}></div>

      {/* Content Layer */}
      <div className="relative z-20 flex items-center justify-center gap-2 opacity-100">
        <span className="m-0 p-0 font-sans text-[15px] font-medium text-background tracking-wide" style={{ WebkitFontSmoothing: 'antialiased', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
          {children}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--background)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition-transform duration-300 group-hover:translate-x-1">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </div>
  </a>
);

export default StyledButton;
