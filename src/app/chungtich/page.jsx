'use client';
import styles from './chungtich.module.css';
import { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Navigation } from '@/components';
import script from '@/script';

import Preloader from '@/components/Chungtich/components/Preloader';
import Landing from '@/components/Chungtich/components/Landing';
import Projects from '@/components/Chungtich/components/Projects';
import Description2 from '@/components/common/Description2';
import SlidingImages from '@/components/Chungtich/components/SlidingImages';
import MaskCursor from '@/components/Chungtich/components/MaskCursor';
import ProjectsImages from '@/components/Chungtich/components/ProjectsImages';
import Contact from '@/components/common/Contact';
import DefaultLayout from '@/layouts/defaultLayout';

export default function Vanhoa() {
    const navigation = script.navigationChungtichPage;

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();

            setTimeout(() => {
                setIsLoading(false);
                document.body.style.cursor = 'default';
                window.scrollTo(0, 0);
            }, 2000);
        })();
    }, []);

    return (
        <main className={styles.main}>
            <DefaultLayout>
                <Navigation links={navigation} />

                <AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence>
                <Landing />
                <Description2 description={script.chungtichPage.description.phrase1} img={script.chungtichPage.description.img} />
                <Projects />
                <SlidingImages />
                <ProjectsImages />

                <h1 style={{ width: '100%', textAlign: 'center', margin: '100px 0 50px' }}>Thước phim lịch sử</h1>
                <div className={styles.stickyMask}>
                    <video controls={false} autoPlay loop muted className={styles.video}>
                        <source src="mp4/4.mp4" type="video/mp4" />
                    </video>
                </div>

                <MaskCursor />
                {/* <Contact /> */}
            </DefaultLayout>
        </main>
    );
}
