'use client';
import Link from 'next/link';

import { useRef, useEffect, useContext, useState } from 'react';
import styles from './style.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

import { v4 as uuidv4 } from 'uuid';

export default function Index({ links }) {
    const header = useRef(null);
    const [userName, setUserName] = useState({});

    const [color, setColor] = useState('white');

    useEffect(() => {
        setUserName(JSON.parse(localStorage.getItem('userName')));
    }, []);

    useEffect(() => {
        if (location.href.includes('/vanhoa') || location.href.includes('/chungtich')) {
            setColor('#690705');
        }
    }, []);

    useEffect(() => {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                header.current.style.top = '0';
            } else {
                header.current.style.top = '-80px';
            }
            prevScrollpos = currentScrollPos;
        };

        return () => {
            window.onscroll = () => {};
        };
    }, []);

    const renderNav = (links) => {
        if (!links) return;
        return links.map((link, index) => {
            if (!link.subnav)
                return (
                    <li>
                        <Link href={link.href} key={`navg${index}${link.content}`}>
                            {link.content}
                        </Link>
                    </li>
                );

            return (
                <li>
                    <Link href={link.href} key={`navg${index}${link.content}`}>
                        {link.content}
                    </Link>
                    <ul className={styles.subnav} key={`subnavg${index}${link.content}`}>
                        {renderNav(link.subnav)}
                    </ul>
                </li>
            );
        });
    };

    if (userName?.state) {
        return (
            <>
                <div className={styles.header} ref={header}>
                    <ul className={styles.navigation}>{renderNav(links)}</ul>
                </div>
                <div className={styles.accountContainer}>
                    <div className={styles.account}>
                        <FontAwesomeIcon icon={faUser} className={styles.accountIcon} />
                        <p>{userName.displayName}</p>
                    </div>
                    <ul className={styles.accountActions}>
                        <li
                            onClick={() => {
                                localStorage.setItem(
                                    'userName',
                                    JSON.stringify({
                                        id: '',
                                        firstName: '',
                                        lastName: '',
                                        displayName: '',
                                        state: false,
                                    })
                                );
                                location.href = location.href;
                            }}
                        >
                            <FontAwesomeIcon icon={faSignOutAlt} className={styles.accountIcon} />
                            <Link href="/">Đăng xuất</Link>
                        </li>
                    </ul>
                </div>
            </>
        );
    }

    return (
        <>
            <div className={styles.header} ref={header}>
                <ul className={styles.navigation}>{renderNav(links)}</ul>
            </div>
            <div className={styles.actionsContainer}>
                <FontAwesomeIcon icon={faEllipsisV} className={styles.actionsIcon} />

                <ul className={styles.actions}>
                    <li style={{ borderRight: `1px solid ${color}` }}>
                        <Link href="/register" style={{ color: color }}>
                            Đăng ký
                        </Link>
                    </li>
                    <li>
                        <Link href="/login" style={{ color: color }}>
                            Đăng nhập
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
