'use client';
import styles from './style.module.css';
import { useRef } from 'react';
import { mi1, mi2, mi3, mi4, mi5, mi6, mi7, mi8, mi9, mi10, mi11, mi12, mi13, mi14, mi15, mi16, mi17, mi18 } from '@/data';
import Image from 'next/image';

export default function Index() {
    const imgsLists = [mi1, mi2, mi3, mi4, mi5, mi6, mi7, mi8, mi9, mi10, mi11, mi12, mi13, mi14, mi15, mi16, mi17, mi18];
    let steps = 0;
    let currentIndex = 0;
    let nbOfImages = 0;
    let maxNumberOfImages = 8;
    let refs = [];

    console.log(imgsLists);

    const manageMouseMove = (e) => {
        const { clientX, clientY, movementX, movementY } = e;

        steps += Math.abs(movementX) + Math.abs(movementY);

        if (steps >= currentIndex * 150) {
            moveImage(clientX, clientY);

            if (nbOfImages == maxNumberOfImages) {
                removeImage();
            }
        }

        if (currentIndex == refs.length) {
            currentIndex = 0;
            steps = -150;
        }
    };

    const moveImage = (x, y) => {
        const currentImage = refs[currentIndex].current;
        currentImage.style.left = x + 'px';
        currentImage.style.top = y + 'px';
        currentImage.style.display = 'block';
        currentIndex++;
        nbOfImages++;
        setZIndex();
    };

    const setZIndex = () => {
        const images = getCurrentImages();
        for (let i = 0; i < images.length; i++) {
            images[i].style.zIndex = i;
        }
    };

    const removeImage = () => {
        const images = getCurrentImages();
        images[0].style.display = 'none';
        nbOfImages--;
    };

    const getCurrentImages = () => {
        let images = [];
        let indexOfFirst = currentIndex - nbOfImages;
        for (let i = indexOfFirst; i < currentIndex; i++) {
            let targetIndex = i;
            if (targetIndex < 0) targetIndex += refs.length;
            images.push(refs[targetIndex].current);
        }
        return images;
    };

    return (
        <>
            <h1 className={styles.title}>Di sản văn hóa</h1>
            <h2 className={styles.subtitle}>Di chuột để xem ảnh </h2>

            <div
                onMouseMove={(e) => {
                    manageMouseMove(e);
                }}
                className={styles.main}
            >
                {[...Array(19).keys()].map((_, index) => {
                    const ref = useRef(null);
                    refs.push(ref);
                    return (
                        <Image
                            onClick={() => {
                                console.log(refs);
                            }}
                            ref={ref}
                            src={imgsLists[index]}
                        />
                    );
                })}
            </div>
        </>
    );
}
