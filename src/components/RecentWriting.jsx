import React from 'react';

const RecentWriting = () => {
    const writings = [
        {
            title: "Designing with AI as a Collaborative Partner",
            meta: "Substack · Essay",
            href: "https://akashspace.substack.com/",
        },
        {
            title: "Notes from the Infinite Canvas",
            meta: "Substack · Notes",
            href: "https://akashspace.substack.com/",
        },
        {
            title: "Building Tools for Thinking with WebGL",
            meta: "Substack · Article",
            href: "https://akashspace.substack.com/",
        },
        {
            title: "Why I Take Obsessive Notes",
            meta: "Substack · Reflection",
            href: "https://akashspace.substack.com/",
        },
    ];

    return (
        <section id="writing" className="py-section px-6 md:px-12 max-w-screen-2xl mx-auto">
            <div className="max-w-4xl">
                <h3 className="text-2xl font-departure tracking-widest text-zinc-500 mb-4">
                    Recent Writing
                </h3>
                <div className="rounded-xl border border-zinc-900/80 overflow-hidden bg-zinc-950/40">
                    {writings.map((post, i) => (
                        <a
                            key={i}
                            href={post.href}
                            target="_blank"
                            rel="noreferrer"
                            className={`interactive group block transition-colors duration-500 ${
                                i < writings.length - 1
                                    ? "border-b border-zinc-900 hover:bg-zinc-900/20"
                                    : "hover:bg-zinc-900/20"
                            }`}
                        >
                            <div className="px-4 py-4 flex items-center justify-between gap-4">
                                <div>
                                     <p className="text-sm md:text-base text-zinc-300 group-hover:text-white font-helvetica">
                                        {post.title}
                                    </p>
                                    <p className="text-[11px] text-zinc-500 font-mono mt-1 uppercase tracking-widest">
                                        {post.meta}
                                    </p>
                                </div>
                                <span className="text-xs text-zinc-600 group-hover:text-zinc-300 font-mono uppercase tracking-widest">
                                    Read
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentWriting;