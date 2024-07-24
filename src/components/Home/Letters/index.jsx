import styles from './style.module.css';
import Image from 'next/image';

export default function Index({ imgs, content, imgAtLeft }) {
    // console.log(title);
    return (
        <div className={styles.letterContainer} style={imgAtLeft ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' }}>
            <div className={styles.letterContainerLeft}>
                <span className={styles.title}>{content}</span>
            </div>
            <div className={styles.letterContainerRight}>
                {imgs.map((img, index) => {
                    return <Image src={img} key={index} className={styles.image} alt="img" />;
                })}
            </div>
        </div>
    );
}
