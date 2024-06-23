'use client';
import styles from './style.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Image from './Image';
import { aboutus, chungtich, trangchu, vanhoa } from '@/data';

const links = [
    {
        title: 'TRANG CHỦ',
        href: 'back',
        src: trangchu,
    },
    {
        title: 'VĂN HÓA',
        href: '/vanhoa',
        src: vanhoa,
    },

    {
        title: 'CHỨNG TÍCH',
        href: '/chungtich',
        src: chungtich,
    },
    {
        title: 'SỨ MỆNH',
        href: '/sumenh',
        src: aboutus,
    },
];

export default function Index() {
    const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });

    return (
        <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
                </div>
                <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive} />
            </div>
        </motion.div>
    );
}
