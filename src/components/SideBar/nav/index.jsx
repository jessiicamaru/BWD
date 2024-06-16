'use client';
import styles from './style.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';
import Image from './Image';
import { aboutus, cart, contact, home, lookbook, shop } from '@/data';

const links = [
    {
        title: 'VĂN HÓA',
        href: '/vanhoa',
        src: home,
    },
    {
        title: 'Shop',
        href: '/shop',
        src: shop,
    },
    {
        title: 'About Us',
        href: '/about',
        src: aboutus,
    },
    {
        title: 'Lookbook',
        href: '/lookbook',
        src: lookbook,
    },
    {
        title: 'Contact',
        href: '/contact',
        src: contact,
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
