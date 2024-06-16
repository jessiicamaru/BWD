'use client';
import Image from 'next/image';
import { VanhoaSectionBackground } from '@/data';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import styles from './style.module.css';

export default function Index() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

    return (
        <div ref={container} className={styles.container} style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}>
            <div>
                <p>Beauty and quality need the right time to be conceived and realised even in a world that is in too much of a hurry.</p>
                <p>Background Parallax</p>
            </div>
            <div>
                <motion.div style={{ y }}>
                    <Image src={VanhoaSectionBackground} fill alt="image" style={{ objectFit: 'cover' }} />
                </motion.div>
            </div>
        </div>
    );
}
