'use client';
import styles from './styles.module.css';
import { zp1, zp2, zp3, zp4, zp5, zp6, zp7 } from '@/data';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: zp1,
            scale: scale4,
        },
        {
            src: zp2,
            scale: scale5,
        },
        {
            src: zp3,
            scale: scale6,
        },
        {
            src: zp4,
            scale: scale5,
        },
        {
            src: zp5,
            scale: scale6,
        },
        {
            src: zp6,
            scale: scale8,
        },
        {
            src: zp7,
            scale: scale9,
        },
    ];

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {pictures.map(({ src, scale }, index) => {
                    return (
                        <motion.div key={index} style={{ scale }} className={styles.el}>
                            <div className={styles.imageContainer}>
                                <Image src={src} fill alt="image" placeholder="blur" />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
