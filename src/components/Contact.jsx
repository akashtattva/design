import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-section relative overflow-hidden">
             {/* Background Glow */}
             <div className="absolute inset-0 bg-gradient-radial from-zinc-900/20 to-transparent opacity-50 pointer-events-none"></div>

             <div className="text-center relative z-10 max-w-4xl mx-auto">
                <span className="text-xs font-mono text-accent uppercase tracking-widest mb-6 block">happy to chat with interesting people</span>
                <h2 className="text-6xl md:text-9xl text-white font-departure tracking-tighter mb-8 mix-blend-difference">
                    let's build<br/>
                    <span className="text-zinc-800 font-chakra">something great</span>
                </h2>
                
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16">
                    <a href="mailto:hello@alex.dev" className="interactive px-12 py-4 bg-accent text-black font-medium text-sm rounded-full hover:scale-105 transition-transform duration-300">
                        Email Me
                    </a>
                    <a href="#" className="interactive px-12 py-4 border border-accent text-accent font-medium text-sm rounded-full hover:bg-zinc-900 hover:text-white transition-all duration-300">
                        view_resume.pdf
                    </a>
                </div>
            </div>
            
            <footer className="absolute bottom-8 w-full text-center">
                <p className="text-[10px] text-accent font-mono uppercase tracking-widest">© 2025 Akash Popat. / Portfolio built with React, Tailwind CSS, GSAP, Three.js, Cursor Agent</p>
            </footer>
        </section>
    );
};

export default Contact;