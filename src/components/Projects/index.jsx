import React, { useLayoutEffect, useRef } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img from 'public/images/salar_de_atacama.jpg';

export default function Index({ imageAtLeft, content }) {
    const container = useRef(null);
    const imageContainer = useRef(null);
    const desciption = useRef(null);

    let title = content.title;
    let contentDescription = content.description;

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: 'top-=100px',
            end: desciption.current.offsetHeight - imageContainer.current.offsetHeight + 'px',
        });
    }, []);

    return (
        <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription} ref={desciption} style={{ flexDirection: `${imageAtLeft ? 'row-reverse' : 'row'}` }}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image src={img} fill={true} alt="project image" priority={true} />
                </div>
                <div className={styles.column}>
                    {contentDescription.map((contentText, index) => {
                        if (index === 0) {
                            return (
                                <div className={styles.pContainer} key={index}>
                                    <p>
                                        <span className={styles.title}>{title}</span>
                                        {contentText.content}
                                    </p>
                                </div>
                            );
                        } else {
                            return (
                                <div className={styles.pContainer} key={index}>
                                    {contentText.image != '' ? (
                                        <img
                                            src={contentText.image}
                                            fill={true}
                                            alt="project image"
                                            priority={true}
                                            className={styles.imgContainer}
                                        />
                                    ) : (
                                        ''
                                    )}
                                    <p>{contentText.content}</p>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
}
