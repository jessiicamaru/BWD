'use client';

import { SideBar, Contact, Chatbot, Search } from '@/components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { useState, useRef, useEffect, memo } from 'react';
import { ChatbotProvider } from '@/store/chatbotStore';

function DefaultLayout({ children }) {
    const [sideBarState, setSideBarState] = useState(false);
    const closeSideBarRef = useRef(null);

    const [iconColor, setIconColor] = useState('white');

    useEffect(() => {
        if (location.href.includes('/vanhoa') || location.href.includes('/chungtich')) {
            setIconColor('#690705');
        }
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
            <ChatbotProvider>
                <Chatbot />
            </ChatbotProvider>
        </>
    );
}

export default memo(DefaultLayout);
