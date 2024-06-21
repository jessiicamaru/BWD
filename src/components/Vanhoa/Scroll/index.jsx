'use client';
import styles from './style.module.css';
import GSAP from './GSAP';
import FramerMotion from './FramerMotion';
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
export default function Home() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <main className={styles.main}>
            <GSAP />
            <GSAP />
            <GSAP />
            <GSAP />
            <FramerMotion />
        </main>
    );
}
