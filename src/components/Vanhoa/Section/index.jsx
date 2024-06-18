'use client';
import Image from 'next/image';
import { VanhoaSectionBackground } from '@/data';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import styles from './style.module.css';
import script from '@/script';

export default function Index() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

    const { phrase1, phrase2 } = script.vanhoaPage.section;

    return (
        <div ref={container} className={styles.container} style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}>
            <div>
                <p>{phrase1}</p>
                <p>{phrase2}</p>
            </div>
            <div>
                <motion.div style={{ y }}>
                    <Image src={VanhoaSectionBackground} fill alt="image" style={{ objectFit: 'cover' }} />
                </motion.div>
            </div>
        </div>
    );
}
