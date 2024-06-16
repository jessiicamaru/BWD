'use client';
import styles from './vanhoa.module.css';
import { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';

import { VanhoaDescription, VanhoaIntro, VanhoaSection, SideBar, Navigation } from '@/components';
import script from '@/script';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Vanhoa() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    const [sideBarState, setSideBarState] = useState(false);
    const closeSideBarRef = useRef(null);

    const navigation = script.navigationVanhoaPage;

    return (
        <main className={styles.main}>
            <button
                className={styles.sideBarButton}
                onClick={() => {
                    setSideBarState(!sideBarState);
                }}
            >
                <FontAwesomeIcon icon={faBars} />
            </button>
            {sideBarState && <SideBar ref={closeSideBarRef} isActive={sideBarState} />}
            <Navigation links={navigation} />
            <VanhoaIntro />
            <VanhoaDescription />
            <VanhoaSection />
            <div style={{ height: '100vh' }}></div>
        </main>
    );
}
