'use client';
import styles from './style.module.css';
import { forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, background } from './anim';

import Nav from './nav';

function index(props, ref) {
    console.log(props);
    const isActive = props.isActive;
    return (
        <div className={styles.header}>
            <div className={styles.bar}>
                <div className={styles.el} ref={ref}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}></div>
                    <div className={styles.label}>
                        <motion.p variants={opacity} animate={!isActive ? 'open' : 'closed'}></motion.p>
                        <motion.p variants={opacity} animate={isActive ? 'open' : 'closed'}></motion.p>
                    </div>
                </div>
            </div>
            <motion.div variants={background} initial="initial" animate={isActive ? 'open' : 'closed'} className={styles.background}></motion.div>
            <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
        </div>
    );
}

export default forwardRef(index);
