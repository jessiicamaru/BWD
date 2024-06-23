import styles from './style.module.css';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation.js';
import script from '@/script';
import Image from 'next/image';
export default function index({ description, img }) {
    const phrase = description;
    const descriptionRef = useRef(null);
    const isInView = useInView(descriptionRef);
    return (
        <div ref={descriptionRef} className={styles.description}>
            <div className={styles.body}>
                <p>
                    {phrase.split(' ').map((word, index) => {
                        return (
                            <span key={index} className={styles.mask}>
                                <motion.span variants={slideUp} custom={index} animate={isInView ? 'open' : 'closed'} key={index}>
                                    {word}
                                </motion.span>
                            </span>
                        );
                    })}
                </p>
                <motion.div variants={opacity} animate={isInView ? 'open' : 'closed'}>
                    <Image src={img} alt="" className={styles.descriptionImg} />
                </motion.div>
            </div>
        </div>
    );
}
