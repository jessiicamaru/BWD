import styles from './style.module.css';

export default function Index() {
    return (
        <div className={styles.footer}>
            <h1>Email của bạn</h1>
            <div className={styles.inputContainer}>
                <input type="text" placeholder="Email for more" />
                <button>Send</button>
            </div>
        </div>
    );
}
