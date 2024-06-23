'use client';
import styles from './style.module.css';
import Card from './Card';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export default function Index({ content }) {
    const projects = content;

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    });

    return (
        <div ref={container} className={styles.main}>
            <h1 style={{ color: 'black', textAlign: 'center', paddingTop: '20px' }}>Những nét đẹp văn hóa </h1>
            {projects.map((project, i) => {
                const targetScale = 1 - (projects.length - i) * 0.05;
                return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />;
            })}
        </div>
    );
}
