import React, { useState } from 'react';

const ProjectDisclosure = ({ name, category, year, index, isOpen, onToggle }) => {
    const panelId = `project-panel-${index}`;
    const headerId = `project-header-${index}`;
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = (e) => {
        const el = e.target;
        const max = el.scrollWidth - el.clientWidth;
        if (max <= 0) {
            setScrollProgress(0);
            return;
        }
        setScrollProgress(el.scrollLeft / max);
    };

    return (
        <div className="interactive group relative border-t border-zinc-900 cursor-none">
            <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={onToggle}
                className="w-full py-10 md:py-16 text-left focus:outline-none"
            >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline px-4 relative z-10 hover:bg-transparent">
                    <div className="flex items-baseline gap-8 md:gap-16">
                        <span className="text-xs font-mono text-zinc-700 group-hover:text-zinc-400 transition-colors">
                            0{index + 1}
                        </span>
                        <h3 className="text-4xl md:text-6xl text-zinc-400 group-hover:text-accent font-helvetica font-normal tracking-tighter transition-all duration-300 group-hover:translate-x-4">
                            {name}
                        </h3>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center gap-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <span className="text-sm text-zinc-500 font-mono">{category}</span>
                        <span className="text-xs text-accent border border-accent/20 px-3 py-1 rounded-full">{year}</span>
                    </div>
                </div>
            </button>

            <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                className={`overflow-hidden transition-all duration-300 bg-zinc-950/60 border-t border-zinc-900/60 ${
                    isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="px-4 pt-8 pb-10 md:pb-12">
                    <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                        Designs — scroll horizontally —
                    </p>
                    <div
                        className="mt-4 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory"
                        onScroll={handleScroll}
                    >
                        <div className="min-w-[70%] md:min-w-[320px] lg:min-w-[420px] aspect-video rounded-lg border border-zinc-800 bg-zinc-900/40 snap-start shrink-0" />
                        <div className="min-w-[70%] md:min-w-[320px] lg:min-w-[420px] aspect-video rounded-lg border border-zinc-800 bg-zinc-900/40 snap-start shrink-0" />
                        <div className="min-w-[70%] md:min-w-[320px] lg:min-w-[420px] aspect-video rounded-lg border border-zinc-800 bg-zinc-900/40 snap-start shrink-0" />
                        <div className="min-w-[70%] md:min-w-[320px] lg:min-w-[420px] aspect-video rounded-lg border border-zinc-800 bg-zinc-900/40 snap-start shrink-0" />
                    </div>
                    <div className="mt-3 h-px bg-zinc-900/80 overflow-hidden">
                        <div
                            className="h-full bg-zinc-500 transition-all duration-200"
                            style={{ width: `${Math.max(scrollProgress * 100, 8)}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDisclosure;