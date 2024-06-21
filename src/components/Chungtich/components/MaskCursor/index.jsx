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
            containerRef.current && containerRef.current.addEventListener('mousemove', updateMousePosition);

            return () => {
                containerRef.current && containerRef.current.removeEventListener('mousemove', updateMousePosition);
            };
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
                    Để có những chứng tích lịch sử như vậy, cha ông ta đã chịu đựng những mất mát đau khổ không thể diễn tả được. Chiến tranh đã cướp
                    đi hàng triệu sinh mạng, phá hủy những làng mạc và những gia đình hạnh phúc.
                </p>
            </motion.div>

            <div className={styles.body}>
                <p>
                    Việt Nam là một đất nước giàu có về di sản lịch sử với hàng ngàn năm văn minh phát triển. Những chứng tích lịch sử là biểu hiện rõ
                    nét của sự kiên cường, sự hi sinh và sự bền bỉ của con người Việt Nam qua các thế hệ.
                </p>
            </div>
        </main>
    );
}
