'use client';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCircleDot } from '@fortawesome/free-regular-svg-icons';
import { useRef, useEffect, useContext } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import { Validate } from './RegisterHandler';

import { RegisterContext, actions } from '@/store/registerStore';

export default function Index() {
    const form = useRef(null);
    const submit = useRef(null);

    const [state, dispatch] = useContext(RegisterContext);
    console.log(state);

    useEffect(() => {
        if (state.formValid) {
            setTimeout(() => {
                location += '/verify';
                localStorage.setItem('BWD_STATE', JSON.stringify(state));
            }, 1000);
        }
    }, [state.formValid]);

    const setLocationBack = () => {
        if (location) {
            let url = location.href;

            url = url.slice(0, url.lastIndexOf('/'));
            location.href = url;
        }
    };

    useEffect(() => {
        if (form.current && submit.current) {
            Validate({
                options: {
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
                },
                context: [state, dispatch],
            });
        }
    }, []);

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
                        <h1 className={styles.heading}>Đăng kí</h1>
                        <div className={styles.line}>
                            <div className={clsx(styles.leftLine, styles.nestInput)}>
                                <span>Họ</span>
                                <input
                                    placeholder="Họ"
                                    type="text"
                                    id="firstName"
                                    onChange={(e) => {
                                        dispatch(actions.setFirstNameInput(e.target.value));
                                    }}
                                    value={state.firstNameInput}
                                />
                                <span className={styles.message}></span>
                            </div>

                            <div className={clsx(styles.rightLine, styles.nestInput)}>
                                <span>Tên</span>
                                <input
                                    placeholder="Tên"
                                    type="text"
                                    id="lastName"
                                    onChange={(e) => {
                                        dispatch(actions.setLastNameInput(e.target.value));
                                    }}
                                    value={state.lastNameInput}
                                />
                                <span className={styles.message}></span>
                            </div>
                        </div>
                        <div className={styles.line}>
                            <div className={clsx(styles.leftLine, styles.nestInput)}>
                                <span>Số điện thoại</span>
                                <input
                                    placeholder="Số điện thoại"
                                    type="text"
                                    id="phoneNumber"
                                    onChange={(e) => {
                                        dispatch(actions.setPhoneNumberInput(e.target.value));
                                    }}
                                    value={state.phoneNumberInput}
                                />
                                <span className={styles.message}></span>
                            </div>

                            <div className={clsx(styles.rightLine, styles.nestInput)}>
                                <span>Email</span>
                                <input
                                    placeholder="Email"
                                    type="text"
                                    id="email"
                                    onChange={(e) => {
                                        dispatch(actions.setEmailInput(e.target.value));
                                    }}
                                    value={state.emailInput}
                                />
                                <span className={styles.message}></span>
                            </div>
                        </div>
                        <div className={styles.line} style={{ 'flex-wrap': 'wrap' }}>
                            <div className={clsx(styles.leftLine, styles.nestInput)} style={{ width: '100%' }}>
                                <span>Mật khẩu</span>
                                <input
                                    placeholder="Mật khẩu"
                                    type="password"
                                    id="password"
                                    onChange={(e) => {
                                        dispatch(actions.setPasswordInput(e.target.value));
                                    }}
                                    value={state.passwordInput}
                                />

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
                                Đăng kí
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
