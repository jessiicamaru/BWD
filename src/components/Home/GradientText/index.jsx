'use client';
import styles from './style.module.css';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

// const phrase =
//     'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.';

export default function Index({ content, fontFamily, fontSize, width, transform, justifyContent, height }) {
    let refs = useRef([]);
    const body = useRef(null);
    const container = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        createAnimation();
    }, []);

    const createAnimation = () => {
        gsap.to(refs.current, {
            scrollTrigger: {
                trigger: container.current,
                scrub: true,
                start: `top + 100px`,
                end: `+=${window.innerHeight / 1.5}`,
            },
            opacity: 1,
            ease: 'none',
            stagger: 0.1,
        });
    };

    const splitWords = (phrase) => {
        let body = [];
        phrase.split(' ').forEach((word, i) => {
            const letters = splitLetters(word);
            body.push(<p key={word + '_' + i}>{letters}</p>);
        });
        return body;
    };

    const splitLetters = (word) => {
        let letters = [];
        word.split('').forEach((letter, i) => {
            letters.push(
                <span
                    key={letter + '_' + i}
                    ref={(el) => {
                        refs.current.push(el);
                    }}
                >
                    {letter}
                </span>
            );
        });
        return letters;
    };

    return (
        <div
            ref={container}
            className={styles.gradientTextContainer}
            style={{
                fontFamily: fontFamily ? fontFamily : '',
                fontSize: fontSize ? fontSize : '3.5vw',
                width: width ? width : '90%',
                transform: transform ? transform : '',
                height: height ? height : '',
            }}
        >
            <div ref={body} className={styles.gradientTextBox} style={{ justifyContent: justifyContent ? justifyContent : '' }}>
                {content ? splitWords(content) : ''}
            </div>
        </div>
    );
}
