'use client';
import { useEffect, useRef, useState, forwardRef } from 'react';
import styles from './style.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Index(props, ref) {
    return (
        <div className={styles.main}>
            <div className={styles.sideBarContainer}>
                <button className={styles.sideBarButton} ref={ref}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <h1>Việt Nam hùng cường</h1>
                <ul>
                    <li>
                        <Link href="/giaidoan">Giai đoạn</Link>
                    </li>
                    <li>
                        <Link href="/chungtich">Chứng tích</Link>
                    </li>
                    <li>
                        <Link href="/noidau">Nỗi đau</Link>
                    </li>
                    <li>
                        <Link href="/vanhoa">Văn hóa</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default forwardRef(Index);
