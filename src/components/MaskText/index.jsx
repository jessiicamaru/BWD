'use client';
import { useRef, useEffect } from 'react';
import styles from './style.module.css';

export default function Index() {
    const container = useRef(null);
    const stickyMask = useRef(null);

    const initialMaskSize = 0.8;
    const targetMaskSize = 30;
    const easing = 0.15;
    let easedScrollProgress = 0;

    useEffect(() => {
        requestAnimationFrame(animate);
    }, []);

    const animate = () => {
        const maskSizeProgress = targetMaskSize * getScrollProgress();
        stickyMask.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 150 + '%';
        requestAnimationFrame(animate);
    };

    const getScrollProgress = () => {
        const scrollProgress = stickyMask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight);
        const delta = scrollProgress - easedScrollProgress;
        easedScrollProgress += delta * easing;
        return easedScrollProgress;
    };

    return (
        <div className={styles.maskTextContainer}>
            <div ref={container} className={styles.container}>
                <div ref={stickyMask} className={styles.stickyMask}>
                    <video controls={false} autoPlay loop muted className={styles.video}>
                        <source src="mp4/HuyenVi.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
}
