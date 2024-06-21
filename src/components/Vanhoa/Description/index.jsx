'use client';
import React from 'react';
import styles from './style.module.css';
import script from '@/script';

export default function Index() {
    return (
        <div className={styles.container}>
            <p className={styles.description}>{script.vanhoaPage.title}</p>
        </div>
    );
}
