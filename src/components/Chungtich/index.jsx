'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Description from './components/Description';
import SlidingImages from './components/SlidingImages';
import MaskCursor from './components/MaskCursor';
import Contact from '@/components/Contact';

import ProjectsImages from './components/ProjectsImages';

export default function Index() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();

            setTimeout(() => {
                setIsLoading(false);
                document.body.style.cursor = 'default';
                window.scrollTo(0, 0);
            }, 2000);
        })();
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence>
            <Landing />
            <Description />
            <Projects />
            <SlidingImages />
            <ProjectsImages />
            <MaskCursor />
            <Contact />
        </>
    );
}
