import styles from './style.module.css';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation.js';
import script from '@/script';
import { descriptionImg } from '@/data';
import Image from 'next/image';
export default function index() {
    const phrase = script.chungtichPage.description.phrase1;
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
                <motion.div variants={opacity} animate={isInView ? 'open' : 'closed'}>
                    <Image src={descriptionImg} alt="" className={styles.descriptionImg} />
                </motion.div>
            </div>
        </div>
    );
}
