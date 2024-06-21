'use client';
import { useLayoutEffect, useRef } from 'react';
import styles from '../style.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { vhs1, vhs2, vhs3 } from '@/data';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Index({ imgs, title, subtitle }) {
    const container = useRef(null);
    const images = imgs;
    const lettersRef = useRef([]);
    const imagesRef = useRef([]);
    const title1 = useRef(null);

    const word = subtitle;

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap
                .timeline({
                    scrollTrigger: {
                        trigger: container.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    },
                })
                .to(title1.current, { y: -50 }, 0)
                .to(imagesRef.current[1], { y: -150 }, 0)
                .to(imagesRef.current[2], { y: -255 }, 0);
            lettersRef.current.forEach((letter, i) => {
                tl.to(
                    letter,
                    {
                        top: Math.floor(Math.random() * -75) - 25,
                    },
                    0
                );
            });
        });
        return () => context.revert();
    }, []);

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.body}>
                <h1 ref={title1}></h1>
                <h1>{title}</h1>
                <div className={styles.word}>
                    <p>
                        {word.split('').map((letter, i) => {
                            return (
                                <span key={`l_${i}`} ref={(el) => (lettersRef.current[i] = el)}>
                                    {letter}
                                </span>
                            );
                        })}
                    </p>
                </div>
            </div>
            <div className={styles.images}>
                {images.map((image, i) => {
                    return (
                        <div key={`i_${i}`} ref={(el) => (imagesRef.current[i] = el)} className={styles.imageContainer}>
                            <Image src={image} placeholder="blur" alt="image" fill />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
