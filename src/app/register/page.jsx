'use client';
import styles from './login.module.css';
import { Register as RegisterComponent } from '@/components';

export default function Login() {
    return (
        <main className={styles.main}>
            <RegisterComponent></RegisterComponent>
        </main>
    );
}
