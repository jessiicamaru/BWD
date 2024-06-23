'use client';
import { useEffect, useRef } from 'react';
import styles from './page.module.css';
import {
    Intro,
    Description,
    Projects,
    FloatingImage,
    ParallaxScroll,
    GradientText,
    CardScroll,
    MaskText,
    Letters,
    Navigation,
    Contact,
} from '../components';

import DefaultLayout from '@/layouts/defaultLayout';

import script from '@/script';
import { useState } from 'react';

export default function Home() {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);

    const { script1, script2, script3, script4, script5 } = script.project;
    const { letters1, letters2, letters3, letters4 } = script.letters;
    const { title1, title2 } = script.title;
    const { gradientLetter1, gradientLetter2 } = script.gradientLetter;
    const { gradientText1, gradientText2 } = script.gradientText;
    const { cardScroll } = script;
    const navigation = script.navigationPage1;

    const [sideBarState, setSideBarState] = useState(false);
    const closeSideBarRef = useRef(null);

    useEffect(() => {
        closeSideBarRef.current &&
            closeSideBarRef.current.addEventListener('click', () => {
                setSideBarState(!sideBarState);
            });
    });

    return (
        <main className={styles.main}>
            <DefaultLayout>
                <Navigation links={navigation} />
                <Intro />
                <Description />
                <div id="project1">
                    <Projects
                        imageAtLeft={false}
                        content={{
                            ...script1,
                        }}
                    />
                </div>

                <div id="project2">
                    <Projects
                        imageAtLeft={true}
                        content={{
                            ...script2,
                        }}
                    />
                </div>

                <div id="project3">
                    <Projects
                        imageAtLeft={false}
                        content={{
                            ...script3,
                        }}
                    />
                </div>

                <div id="project4">
                    <Projects
                        imageAtLeft={true}
                        content={{
                            ...script4,
                        }}
                    />
                </div>

                <div id="project5">
                    <Projects
                        imageAtLeft={false}
                        content={{
                            ...script5,
                        }}
                    />
                </div>

                <div id="chungtich">
                    <FloatingImage />
                </div>

                <div id="noidau">
                    <GradientText content={gradientText1} />

                    <Letters {...letters1} imgAtLeft={false} />

                    <Letters {...letters2} imgAtLeft={true} />

                    <Letters {...letters3} imgAtLeft={false} />

                    <Letters {...letters4} imgAtLeft={true} />

                    <h1
                        style={{
                            color: 'white',
                            width: '100%',
                            textAlign: 'center',
                            marginTop: '18px',
                            marginBottom: '18px',
                            fontFamily: 'Authoritative',
                            fontSize: '50px',
                        }}
                    >
                        {title1}
                    </h1>
                    <div
                        className={styles.row}
                        style={{
                            marginTop: '-40vh',
                        }}
                    >
                        <div className={styles.row}>
                            <div className={styles.column}>
                                <GradientText content={gradientLetter1.content} fontFamily={'Authoritative'} fontSize={'40px'} width={'100%'} />

                                <GradientText
                                    content={gradientLetter1.date}
                                    fontFamily={'Authoritative'}
                                    fontSize={'40px'}
                                    width={'100%'}
                                    transform={'translateY(-90%)'}
                                    justifyContent={'flex-end'}
                                />
                                <GradientText
                                    content={gradientLetter1.author}
                                    fontFamily={'Authoritative'}
                                    fontSize={'40px'}
                                    width={'100%'}
                                    transform={'translateY(-185%)'}
                                    justifyContent={'flex-end'}
                                />
                            </div>
                        </div>

                        <div style={{ marginTop: '-240vh' }}>
                            <div className={styles.row}>
                                <div className={styles.column}>
                                    <GradientText content={gradientLetter2.content} fontFamily={'Authoritative'} fontSize={'40px'} width={'100%'} />
                                    <GradientText
                                        content={gradientLetter2.date}
                                        fontFamily={'Authoritative'}
                                        fontSize={'40px'}
                                        width={'100%'}
                                        transform={'translateY(-90%)'}
                                        justifyContent={'flex-end'}
                                    />
                                    <GradientText
                                        content={gradientLetter2.author}
                                        fontFamily={'Authoritative'}
                                        fontSize={'40px'}
                                        width={'100%'}
                                        transform={'translateY(-185%)'}
                                        justifyContent={'flex-end'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1
                        style={{
                            color: 'white',
                            width: '100%',
                            textAlign: 'center',
                            marginTop: '18px',
                            fontSize: '70px',
                            fontFamily: 'Authoritative',
                            marginTop: '-140vh',
                        }}
                    >
                        {title2}
                    </h1>
                </div>

                <ParallaxScroll />

                <div className={styles.row}>
                    <div className={styles.column}>
                        <GradientText content={gradientText2} fontSize={'35px'} width={'100%'} transform={'translateY(-50%)'} />
                    </div>
                </div>

                <div id="vanhoa">
                    <MaskText />
                </div>

                <CardScroll content={cardScroll} />

                {/* <Contact /> */}
            </DefaultLayout>
        </main>
    );
}
