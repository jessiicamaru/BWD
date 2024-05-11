import styles from './style.module.css';
import Image from 'next/image';

export default function Index() {
    return (
        <div className={styles.letterContainer}>
            <div className={styles.letterContainerLeft}>Những mái ấm không trọn vẹn</div>
            <div className={styles.letterContainerRight}>
                <Image />
            </div>
        </div>
    );
}
