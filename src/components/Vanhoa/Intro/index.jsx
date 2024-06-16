'use client';
import React from 'react';
import Image from 'next/image';
import { VanhoaIntroBackground } from '@/data';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import styles from './style.module.css';

export default function Index() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh']);

    return (
        <div className={styles.container}>
            <motion.div style={{ y }} className={styles.imageContainer}>
                <Image src={VanhoaIntroBackground} fill alt="image" style={{ objectFit: 'cover' }} />
            </motion.div>
        </div>
    );
}
