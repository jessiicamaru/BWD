'use client';
import styles from './style.module.css';
import { useEffect, useRef, useState } from 'react';
import script from '@/script';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';

const data = script.chungtichPage.projectsImages;

export default function Index() {
    const father = useRef(null);

    const [itemIndex, setItemIndex] = useState(0);

    useEffect(() => {
        if (father) {
            const overlay = father.current.querySelector(`.${styles.overlay}`);
            const closeBtn = father.current.querySelector(`.${styles.closeBtn}`);

            const t1 = gsap.timeline({ paused: true, overwrite: 'auto' });

            t1.to(overlay, {
                duration: 0.5,
                bottom: '0px',
                rotation: 0,
                transformOrigin: 'bottom center',
                ease: 'power3.inOut',
            });

            const items = father.current.querySelectorAll(`.${styles.item}`);
            items.forEach((item, index) => {
                item.addEventListener('click', () => {
                    closeBtn.click();
                    // updateOverlay(data[index]);

                    t1.play();
                });
            });

            closeBtn.addEventListener('click', () => {
                t1.reverse();
            });

            // function updateOverlay(dataItem) {
            //     const itemName = father.current.querySelector('#item-category').previousElementSibling;
            //     const itemCategory = father.current.querySelector('#item-category');

            //     itemName.textContent = dataItem.itemName;
            //     itemCategory.textContent = dataItem.itemCategory;
            // }

            father.current.addEventListener('click', (e) => {
                if (!overlay.contains(e.target) && !isItem(e.target)) {
                    t1.reverse();
                }
            });

            function isItem(target) {
                return target.closest(`.${styles.item}`);
            }
        }
    }, []);

    return (
        <div className={styles.main} ref={father}>
            <div className={styles.overlay}>
                <div className={styles.overlayHeader}>
                    <div className={styles.col}>
                        <h1 id="item-name">{data[itemIndex].itemName}</h1>
                        <p id="item-category"></p>
                    </div>
                    <div className={styles.col}>
                        <p className={styles.closeBtn}>Close</p>
                    </div>
                </div>
                <div className={styles.itemDetails}>
                    <p>
                        <b style={{ lineHeight: 2 }}>Bài học</b> <br />
                        {data[itemIndex].itemDescription2}
                    </p>
                    <p>
                        <b style={{ lineHeight: 2 }}>Tổng quan</b> <br />
                        {data[itemIndex].itemDescription}
                    </p>
                </div>

                <div className={styles.imageContainer}>
                    <Image src={data[itemIndex].itemImage} id="item-img" alt="Item Image" />
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.items}>
                    {data.map((item, index) => {
                        return (
                            <div
                                className={styles.item}
                                onClick={() => {
                                    setItemIndex(index);
                                }}
                            >
                                <div className={styles.itemIndex}>{item.itemIndex}</div>
                                <div className={styles.itemName}>{item.itemName}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
