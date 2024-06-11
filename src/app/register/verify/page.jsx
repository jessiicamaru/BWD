import styles from './verify.module.css';
import { Verify as VerifyComponent } from '@/components';

export default function Verify() {
    return (
        <main className={styles.main}>
            <VerifyComponent />
        </main>
    );
}
