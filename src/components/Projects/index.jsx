'use client';
import React, { useLayoutEffect, useRef } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Index({ imageAtLeft, content }) {
    const container = useRef(null);
    const imageContainer = useRef(null);
    const desciption = useRef(null);

    let title = content.title;
    let contentDescription = content.description;

    let start = '0';
    let end = '0';

    useLayoutEffect(() => {
        if (window.innerWidth > 739) {
            start = 'top-=100px';
            end = desciption.current.offsetHeight - imageContainer.current.offsetHeight + 'px';
        }

        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: start,
            end: end,
        });
    }, []);

    return (
        <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription} ref={desciption} style={{ flexDirection: `${imageAtLeft ? 'row-reverse' : 'row'}` }}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image src={content.mainImage ? content.mainImage : img} fill={true} alt="project image" priority={true} />
                </div>
                <div className={styles.column}>
                    {contentDescription.map((contentText, index) => {
                        if (index === 0) {
                            return (
                                <div className={styles.pContainer} key={index}>
                                    <p>
                                        <span className={styles.title}>{title}</span>
                                        <span className={styles.contentBox}>{contentText.content}</span>
                                    </p>
                                </div>
                            );
                        } else {
                            if (contentText.image.position === 'under') {
                                return (
                                    <div className={styles.pContainer} key={index}>
                                        <p>
                                            <span className={styles.contentBox}>{contentText.content}</span>
                                        </p>
                                        {contentText.image.src ? (
                                            <div className={styles.commentContainer}>
                                                <img
                                                    src={contentText.image.src.src}
                                                    fill={true}
                                                    alt="project image"
                                                    priority={true}
                                                    className={styles.imgContent}
                                                />
                                                <span className={styles.comment}>{contentText.image.comment}</span>
                                            </div>
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                );
                            }
                            return (
                                <div className={styles.pContainer} key={index}>
                                    {contentText.image.src ? (
                                        <div className={styles.commentContainer}>
                                            <img
                                                src={contentText.image.src.src}
                                                fill={true}
                                                alt="project image"
                                                priority={true}
                                                className={styles.imgContent}
                                            />
                                            <span className={styles.comment}>{contentText.image.comment}</span>
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                    <span className={styles.contentBox}>{contentText.content}</span>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
}
