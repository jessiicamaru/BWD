'use client';
import React, { useLayoutEffect, useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import styles from './style.module.css';

const phrases = [
    'Việt Nam - 4000 năm lịch sử ',
    'với những thăng trầm sóng gió ',
    'nhưng trong những trang sử ấy ',
    'vẫn toát lên vẻ hào hùng, bất khuất của dân tộc',
    'trong quá trình dựng nước và giữ nước...',
];

export default function Index() {
    return (
        <div className={styles.description}>
            {phrases.map((phrase, index) => {
                return <AnimatedText key={index}>{phrase}</AnimatedText>;
            })}
        </div>
    );
}

function AnimatedText({ children }) {
    const text = useRef(null);

    useLayoutEffect(() => {
        let width = window.innerWidth;
        let start = '';
        let end = '';

        if (width < 1024 && width >= 740) {
            start = '0px bottom-=300px';
            end = '-200px';
        } else if (width < 740) {
            start = '0px bottom-=400px';
            end = '-350px';
        } else {
            start = '0px bottom';
            end = '-400px';
        }

        gsap.registerPlugin(ScrollTrigger);
        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                scrub: true,
                start: `${start}`,
                end: 'bottom+=400px bottom',
            },
            opacity: 0,
            left: `${end}`,
            ease: 'power3.Out',
        });
    }, []);

    return <p ref={text}>{children}</p>;
}
