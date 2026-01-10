import React from 'react';
import CustomCursor from './components/CustomCursor';
import Scene from './components/Scene';
import Nav from './components/Nav';
import Hero from './components/Hero';
import RecentWriting from './components/RecentWriting';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => {
    return (
        <div className="relative">
            <CustomCursor />
            <Scene />
            <Nav />
            <main className="relative z-10">
                <Hero />
                <RecentWriting />
                <Projects />
                <Experience />
                <Contact />
            </main>
        </div>
    );
};

export default App;