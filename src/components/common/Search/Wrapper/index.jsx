'use client';
import Link from 'next/link';
import styles from './style.module.css';
import { useId } from 'react';

export default function Index({ results }) {
    return (
        <ul className={styles.wrapper}>
            {results.map((item) => {
                return (
                    <li>
                        <Link href={item.link} key={item.link}>
                            {item.content}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
