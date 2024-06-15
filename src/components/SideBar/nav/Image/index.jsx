import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './style.module.css';
import { opacity } from '../../anim';

export default function Index({ src, isActive }) {
    return (
        <motion.div variants={opacity} initial="initial" animate={isActive ? 'open' : 'closed'} className={styles.imageContainer}>
            <Image src={src} fill={true} alt="image" />
        </motion.div>
    );
}
