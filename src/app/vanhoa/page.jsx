'use client';
import styles from './vanhoa.module.css';
import { useEffect } from 'react';
import Lenis from 'lenis';

import { VanhoaDescription, VanhoaIntro, VanhoaSection } from '@/components';

export default function Vanhoa() {
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
            <VanhoaIntro />
            <VanhoaDescription />
            <VanhoaSection />
            <div style={{ height: '100vh' }}></div>
        </main>
    );
}
