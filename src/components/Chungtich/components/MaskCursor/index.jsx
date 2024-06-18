'use client';
import styles from './style.module.css';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import useMousePosition from './utils/useMousePosition';

export default function Index() {
    const containerRef = useRef(null);

    const useMousePosition = () => {
        const [mousePosition, setMousePosition] = useState({ x: null, y: null });

        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        useEffect(() => {
            containerRef.current.addEventListener('mousemove', updateMousePosition);

            return () => containerRef.current.removeEventListener('mousemove', updateMousePosition);
        }, []);

        return mousePosition;
    };

    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();
    const size = isHovered ? 400 : 40;

    return (
        <main className={styles.main} ref={containerRef}>
            <motion.div
                className={styles.mask}
                animate={{
                    WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
                    WebkitMaskSize: `${size}px`,
                }}
                transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
            >
                <p
                    onMouseEnter={() => {
                        setIsHovered(true);
                    }}
                    onMouseLeave={() => {
                        setIsHovered(false);
                    }}
                >
                    A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
                </p>
            </motion.div>

            <div className={styles.body}>
                <p>
                    I'm a <span>selectively skilled</span> product designer with strong focus on producing high quality & impactful digital
                    experience.
                </p>
            </div>
        </main>
    );
}