'use client';
import styles from './login.module.css';
import { Login as LoginComponent } from '@/components';

export default function Login() {
    return (
        <main className={styles.main}>
            <LoginComponent></LoginComponent>
        </main>
    );
}
