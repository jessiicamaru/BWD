import styles from './style.module.css';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation.js';
export default function index() {
    const phrase =
        'Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.';
    const description = useRef(null);
    const isInView = useInView(description);
    return (
        <div ref={description} className={styles.description}>
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
                <motion.p variants={opacity} animate={isInView ? 'open' : 'closed'}>
                    The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
                </motion.p>
            </div>
        </div>
    );
}