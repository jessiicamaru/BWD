'use client';
import styles from './register.module.css';
import { Register as RegisterComponent } from '@/components';

export default function Register() {
    return (
        <main className={styles.main}>
            <RegisterComponent />
        </main>
    );
}
