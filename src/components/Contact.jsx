import React from 'react';
import StyledButton from './StyledButton';

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center px-6 pt-0 pb-section relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-radial from-zinc-900/20 to-transparent opacity-50 pointer-events-none"></div>

            <div className="text-center relative z-10 max-w-4xl mx-auto">
                <span className="text-xs font-mono text-accent uppercase tracking-widest mb-6 block">happy to chat with interesting people</span>
                <h2 className="text-6xl md:text-9xl text-foreground font-ogg tracking-tighter mb-8 mix-blend-difference">
                    let's build<br />
                    <span className="text-accent font-ogg">something great</span>
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16">
                    <StyledButton href="mailto:hello@alex.dev">
                        Email Me
                    </StyledButton>
                    <StyledButton href="#" style={{ backgroundColor: 'var(--foreground)' }}>
                        view_resume.pdf
                    </StyledButton>
                </div>
            </div>

            <footer className="absolute bottom-8 w-full text-center">
                <p className="text-[10px] text-accent font-mono uppercase tracking-widest">© 2025 Akash Popat. / Portfolio built with React, Tailwind CSS, GSAP, Three.js, Cursor Agent</p>
            </footer>
        </section>
    );
};

export default Contact;