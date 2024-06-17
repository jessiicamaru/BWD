'use client';
import styles from './chungtich.module.css';
import { useState, useRef } from 'react';

import { SideBar, Navigation } from '@/components';
import script from '@/script';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { Chungtich } from '@/components';

export default function Vanhoa() {
    const [sideBarState, setSideBarState] = useState(false);
    const closeSideBarRef = useRef(null);

    const navigation = script.navigationChungtichPage;

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
            <Chungtich></Chungtich>
        </main>
    );
}
