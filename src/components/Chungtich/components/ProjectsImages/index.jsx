'use client';
import styles from './style.module.css';
import { useEffect, useRef, useState } from 'react';
import script from '@/script';
import Link from 'next/link';
import { background } from '@/data';
import Image from 'next/image';
import gsap from 'gsap';

const data = [
    {
        itemName: 'Item Name 1',
        itemCategory: 'Category 1',
        itemLink: 'https://example.com/item-1',
        itemCopy: 'This is the description for Item 1.',
        itemImg: 'image/1.jpg',
    },
    {
        itemName: 'Item Name 2',
        itemCategory: 'Category 2',
        itemLink: 'https://example.com/item-2',
        itemCopy: 'This is the description for Item 2.',
        itemImg: 'image/2.jpg',
    },
    {
        itemName: 'Item Name 3',
        itemCategory: 'Category 3',
        itemLink: 'https://example.com/item-3',
        itemCopy: 'This is the description for Item 3.',
        itemImg: 'image/3.jpg',
    },
];

export default function Index() {
    const father = useRef(null);
    useEffect(() => {
        if (father) {
            const overlay = father.current.querySelector(`.${styles.overlay}`);
            const closeBtn = father.current.querySelector('#close-btn');

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
                    updateOverlay(data[index]);

                    t1.play();
                });
            });

            closeBtn.addEventListener('click', () => {
                t1.reverse();
            });

            function updateOverlay(dataItem) {
                const itemName = father.current.querySelector('#item-category').previousElementSibling;
                const itemCategory = father.current.querySelector('#item-category');
                const itemLink = father.current.querySelector('#item-link');
                const itemCopy = father.current.querySelector('#item-copy');
                const itemImg = father.current.querySelector('#item-img');

                itemName.textContent = dataItem.itemName;
                itemCategory.textContent = dataItem.itemCategory;
                itemLink.href = dataItem.itemLink;
                itemCopy.textContent = dataItem.itemCopy;
                itemImg.src = dataItem.itemImg;
            }

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
                        <h1 id="item-name">Item Name</h1>
                        <p id="item-category">Item Category</p>
                    </div>
                    <div className={styles.col}>
                        <p id="close-btn">Close</p>
                    </div>
                </div>
                <div className={styles.itemDetails}>
                    <p>
                        <Link href="#" id="item-link">
                            <i className="ph-bold ph-arrow-up-right"></i>View Site
                        </Link>
                    </p>
                    <p id="item-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={background} id="item-img" alt="Item Image" />
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.items}>
                    <div className={styles.item}>
                        <div className={styles.itemIndex}>01</div>
                        <div className={styles.itemName}>Item Name 1</div>
                        <div className={styles.itemYear}>2023</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.itemIndex}>02</div>
                        <div className={styles.itemName}>Item Name 2</div>
                        <div className={styles.itemYear}>2022</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.itemIndex}>03</div>
                        <div className={styles.itemName}>Item Name 3</div>
                        <div className={styles.itemYear}>2021</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
