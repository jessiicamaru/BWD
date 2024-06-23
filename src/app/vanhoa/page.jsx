'use client';
import styles from './vanhoa.module.css';
import { useEffect } from 'react';
import Lenis from 'lenis';

import { VanhoaDescription, VanhoaIntro, VanhoaSection, Navigation, ZoomParallax, Contact, MouseImage, VanhoaScroll } from '@/components';
import script from '@/script';

import Description2 from '@/components/common/Description2';
import DefaultLayout from '@/layouts/defaultLayout';

export default function Vanhoa() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    const navigation = script.navigationVanhoaPage;

    return (
        <main className={styles.main}>
            <DefaultLayout>
                <Navigation links={navigation} />
                <VanhoaIntro />
                <VanhoaDescription />
                <VanhoaSection />
                <div style={{ height: '100vh' }}></div>
                <ZoomParallax />

                <div className={styles.stickyMask}>
                    <video controls={false} autoPlay loop muted className={styles.video}>
                        <source src="mp4/3.mp4" type="video/mp4" />
                    </video>
                </div>

                <Description2 description={script.vanhoaPage.description.content} img={script.vanhoaPage.description.img} />

                <h1 style={{ width: '100%', textAlign: 'center', margin: '100px 0 50px' }}>Và còn nhiều hơn thế nữa...</h1>

                <VanhoaScroll />
                <MouseImage />
                {/* <Contact /> */}
            </DefaultLayout>
        </main>
    );
}
