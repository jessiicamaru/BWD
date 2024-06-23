'use client';

import { SideBar, Contact } from '@/components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { useState, useRef, useEffect } from 'react';

export default function DefaultLayout({ children }) {
    const [sideBarState, setSideBarState] = useState(false);
    const closeSideBarRef = useRef(null);

    const [iconColor, setIconColor] = useState('white');

    useEffect(() => {
        location && location.href !== location.origin + '/' && setIconColor('#690705');
    }, []);

    return (
        <>
            <button
                className="sideBarButton"
                onClick={() => {
                    setSideBarState(!sideBarState);
                }}
            >
                <FontAwesomeIcon icon={faBars} style={{ color: iconColor }} />
            </button>
            {sideBarState && <SideBar ref={closeSideBarRef} isActive={sideBarState} />}
            {children}
            <Contact />
        </>
    );
}
