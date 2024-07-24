'use client';
import styles from './chungtich.module.css';
import { useState, useEffect } from 'react';
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
import DefaultLayout from '@/layouts/defaultLayout';

export default function Vanhoa() {
    const navigation = script.navigationChungtichPage;

    const [isLoading, setIsLoading] = useState(true);

    const scrpt = script;

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

    function findContentAndLink(searchString) {
        const pages = ['homePage', 'chungtichPage', 'vanhoaPage'];
        const results = [];

        pages.forEach((page) => {
            const pageData = scrpt[page];
            if (pageData) {
                Object.values(pageData).forEach((item) => {
                    if (item.content && item.link) {
                        results.push({ content: item.content, link: item.link });
                        if (item.content.includes(searchString)) {
                        }
                    }
                    if (item.description) {
                        item.description.forEach((desc) => {
                            results.push({ content: desc.content, link: desc.link });
                            if (desc.content && desc.content.includes(searchString)) {
                            }
                        });
                    }
                });
            }
        });

        return results;
    }

    const searchString = 'Dương Vương';
    const matchingItems = findContentAndLink(searchString);

    console.log(matchingItems);

    return (
        <DefaultLayout>
            <main className={styles.main}>
                <Navigation links={navigation} />

                <AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence>
                <Landing />
                <Description2 description={script.chungtichPage.description.content} img={script.chungtichPage.description.img} />
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
            </main>
        </DefaultLayout>
    );
}
