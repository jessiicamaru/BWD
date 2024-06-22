'use client';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCircleDot } from '@fortawesome/free-regular-svg-icons';
import { useRef } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

export default function Index() {
    const form = useRef(null);
    const submit = useRef(null);

    const setLocationBack = () => {
        if (location) {
            let url = location.href;

            url = url.slice(0, url.lastIndexOf('/'));
            location.href = url;
        }
    };

    return (
        <>
            <div className={styles.backButton} onClick={setLocationBack}>
                <FontAwesomeIcon icon={faHome} className={styles.backIcon} />
                Quay lại
            </div>
            <div className={styles.container} ref={form}>
                <div className={styles.leftSide}></div>
                <div className={styles.rightSide}>
                    <div className={styles.form1}>
                        <h1 className={styles.heading}>Đăng nhập</h1>
                        <div className={styles.line}>
                            <div className={clsx(styles.leftLine, styles.nestInput)} style={{ width: '100%' }}>
                                <span>Email</span>
                                <input placeholder="Email" type="text" id="email" />
                                <span className={styles.message}></span>
                            </div>
                        </div>
                        <div className={styles.line} style={{ 'flex-wrap': 'wrap' }}>
                            <div className={clsx(styles.leftLine, styles.nestInput)} style={{ width: '100%' }}>
                                <span>Password</span>
                                <input placeholder="Password" type="password" id="password" />
                            </div>
                        </div>
                        <div style={{ width: '100%', padding: '0 10px' }}>
                            <button className={styles.submit} ref={submit}>
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
