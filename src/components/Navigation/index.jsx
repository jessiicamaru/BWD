'use client';
import Link from 'next/link';

import { useRef, useEffect, useContext } from 'react';
import styles from './style.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { RegisterContext, actions } from '@/store/registerStore';

export default function Index() {
    const header = useRef(null);

    const [state, dispatch] = useContext(RegisterContext);
    let username = state.firstNameInput + ' ' + state.lastNameInput;
    console.log(state);

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

    if (state.success) {
        return (
            <>
                <div className={styles.header} ref={header}>
                    <ul className={styles.navigation}>
                        <li>
                            <a href="#">Giới thiệu</a>
                        </li>
                        <li>
                            <a href="#">Giai đoạn</a>
                            <ul className={styles.subnav}>
                                <li>
                                    <a href="#project1">TIỀN LỊCH SỬ VÀ SƠ KHAI DỰNG NƯỚC</a>
                                </li>
                                <li>
                                    <a href="#project2">ĐẤU TRANH GIỮ NƯỚC</a>
                                </li>
                                <li>
                                    <a href="#project3">PHONG KIẾN XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC</a>
                                </li>
                                <li>
                                    <a href="#project4">ĐẤU TRANH GIẢI PHÓNG DÂN TỘC</a>
                                </li>
                                <li>
                                    <a href="#project5">THỐNG NHẤT ĐẤT NƯỚC</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#chungtich">Chứng tích</a>
                        </li>
                        <li>
                            <a href="#noidau">Nỗi đau</a>
                        </li>
                        <li>
                            <a href="#vanhoa">Văn hóa</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.accountContainer}>
                    <div className={styles.account}>
                        <FontAwesomeIcon icon={faUser} className={styles.accountIcon} />
                        {state.firstNameInput && state.lastNameInput ? <p>{username}</p> : <p></p>}
                    </div>
                    <ul className={styles.accountActions}>
                        <li
                            onClick={() => {
                                dispatch(actions.setDefaultState());
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
                <ul className={styles.navigation}>
                    <li>
                        <a href="#">Giới thiệu</a>
                    </li>
                    <li>
                        <a href="#">Giai đoạn</a>
                        <ul className={styles.subnav}>
                            <li>
                                <a href="#project1">TIỀN LỊCH SỬ VÀ SƠ KHAI DỰNG NƯỚC</a>
                            </li>
                            <li>
                                <a href="#project2">ĐẤU TRANH GIỮ NƯỚC</a>
                            </li>
                            <li>
                                <a href="#project3">PHONG KIẾN XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC</a>
                            </li>
                            <li>
                                <a href="#project4">ĐẤU TRANH GIẢI PHÓNG DÂN TỘC</a>
                            </li>
                            <li>
                                <a href="#project5">THỐNG NHẤT ĐẤT NƯỚC</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#chungtich">Chứng tích</a>
                    </li>
                    <li>
                        <a href="#noidau">Nỗi đau</a>
                    </li>
                    <li>
                        <a href="#vanhoa">Văn hóa</a>
                    </li>
                </ul>
            </div>
            <div className={styles.actionsContainer}>
                <FontAwesomeIcon icon={faEllipsisV} className={styles.actionsIcon} />

                <ul className={styles.actions}>
                    <li>
                        <Link href="/register">Đăng ký</Link>
                    </li>
                    <li>
                        <Link href="/login">Đăng nhập</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
