import React from 'react';

const Experience = () => {
     return (
        <section id="experience" className="pt-0 pb-section px-6 max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                <div>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl text-foreground opacity-30 font-departure tracking-tighter mb-8 leading-none select-none">Experience</h2>
                     <p className="text-lg font-chakra font-normal leading-relaxed max-w">
                        Delivering robust, scalable, and beautiful software solutions for industry leaders. 
                        Focusing on the intersection of design systems and WebGL.
                     </p>
                </div>
                <div className="space-y-12 mt-12 md:mt-0">
                    {[
                        { company: "Stripe", role: "Senior Creative Engineer", period: "2022 — Present" },
                        { company: "Vercel", role: "Design Engineer", period: "2020 — 2022" },
                        { company: "Agency", role: "WebGL Developer", period: "2018 — 2020" }
                    ].map((job, i) => (
                        <div key={i} className="group interactive">
                            <div className="flex justify-between items-end border-b border-zinc-900 pb-4 mb-4 font-helvetica group-hover:border-accent/50 transition-colors">
                                <h4 className="text-2xl text-white group-hover:text-accent font-helvetica font-normal tracking-tight transition-colors">{job.company}</h4>
                                <span className="text-xs text-zinc-600 font-mono">{job.period}</span>
                            </div>
                            <p className="text-sm text-zinc-500 font-helvetica font-normal">{job.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;