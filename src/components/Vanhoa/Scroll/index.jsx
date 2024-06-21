'use client';
import styles from './style.module.css';
import GSAP from './GSAP';
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

import script from '@/script';

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    const scroll = script.vanhoaPage.scroll;

    return (
        <main className={styles.main}>
            <GSAP {...scroll[0]} />
            <GSAP {...scroll[1]} />
            <GSAP {...scroll[2]} />
            <GSAP {...scroll[3]} />
            <GSAP {...scroll[4]} />
        </main>
    );
}
