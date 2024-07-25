'use client';
import Link from 'next/link';
import styles from './style.module.css';
import { useId } from 'react';

export default function Index({ results }) {
    return (
        <ul className={styles.wrapper}>
            {results.map((item) => {
                let id = useId();
                return (
                    <li>
                        <Link href={item.link} key={id}>
                            {item.content}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
