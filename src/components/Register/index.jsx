'use client';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-regular-svg-icons';
import { useRef, useEffect } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import { Validate } from './validator';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function Index() {
    const form = useRef(null);
    const submit = useRef(null);

    useEffect(() => {
        if (form.current && submit.current) {
            Validate({
                form: form.current,
                errorElement: styles.nestInput,
                submitInfo: submit.current,
                rules: [
                    Validate.isRequired('#firstName'),
                    Validate.isRequired('#lastName'),
                    Validate.isPhoneNumber('#phoneNumber'),
                    Validate.isRequired('#phoneNumber'),
                    Validate.isRequired('#email'),
                    Validate.isEmail('#email'),
                    Validate.isRequired('#password'),
                    Validate.isPassword('#password'),
                ],
            });
        }
    }, []);

    return (
        <>
            <div className={styles.backButton}>
                <FontAwesomeIcon icon={faHome} className={styles.backIcon} />
                <Link href="/">Quay lại</Link>
            </div>
            <div className={styles.container} ref={form}>
                <div className={styles.leftSide}></div>
                <div className={styles.rightSide}>
                    <div className={styles.form1}>
                        <h1 className={styles.heading}>Sign up</h1>
                        <div className={styles.line}>
                            <div className={clsx(styles.leftLine, styles.nestInput)}>
                                <span>First name</span>
                                <input placeholder="First name" type="text" id="firstName" />
                                <span className={styles.message}></span>
                            </div>

                            <div className={clsx(styles.rightLine, styles.nestInput)}>
                                <span>Last name</span>
                                <input placeholder="Last name" type="text" id="lastName" />
                                <span className={styles.message}></span>
                            </div>
                        </div>
                        <div className={styles.line}>
                            <div className={clsx(styles.leftLine, styles.nestInput)}>
                                <span>Phone</span>
                                <input placeholder="Phone" type="text" id="phoneNumber" />
                                <span className={styles.message}></span>
                            </div>

                            <div className={clsx(styles.rightLine, styles.nestInput)}>
                                <span>Email</span>
                                <input placeholder="Email" type="text" id="email" />
                                <span className={styles.message}></span>
                            </div>
                        </div>
                        <div className={styles.line} style={{ 'flex-wrap': 'wrap' }}>
                            <div className={clsx(styles.leftLine, styles.nestInput)} style={{ width: '100%' }}>
                                <span>Password</span>
                                <input placeholder="Password" type="password" id="password" />

                                <span style={{ width: '100%', display: 'block', 'font-size': '12px', margin: '5px 0' }} id="condition--1">
                                    <FontAwesomeIcon icon={faCircleDot} className={clsx(styles.dot, styles.icon)} />
                                    Mật khẩu phải có ít nhất 6 kí tự
                                </span>
                                <span style={{ width: '100%', display: 'block', 'font-size': '12px', margin: '5px 0' }} id="condition--2">
                                    <FontAwesomeIcon icon={faCircleDot} className={clsx(styles.dot, styles.icon)} />
                                    Mật khẩu phải bao gồm chữ số
                                </span>
                                <span style={{ width: '100%', display: 'block', 'font-size': '12px', margin: '5px 0' }} id="condition--3">
                                    <FontAwesomeIcon icon={faCircleDot} className={clsx(styles.dot, styles.icon)} />
                                    Mật khẩu phải bao gồm chữ hoa
                                </span>
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
