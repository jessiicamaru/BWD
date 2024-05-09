import styles from './style.module.css';

export default function Index() {
    return (
        <div className={styles.letterContainer}>
            <div className={styles.letterContainerLeft}>Những bức thư từ chiến trường</div>
            <div className={styles.letterContainerRight} style={{ fontFamily: "'Kolker Brush', cursive !important" }}>
                <p>
                    "Mẹ cứ yên tâm đừng lo nghĩ gì về con nhiều quá mà ảnh hưởng sức khoẻ mẹ ạ! Mà mẹ thì già yếu rồi, làm việc bình thường thôi đừng
                    quá sức mẹ nhé và buổi tối mẹ đi ngủ sớm đừng muộn mà ảnh hưởng đến sức khoẻ. Còn con hiện nay thì không thiếu thốn gì cả, chỉ
                    buồn thôi cho nên mẹ chỉ cần gửi thư cho con và không cần gửi tiền hay bánh kẹo gì cả khi nào thiếu thốn gì con sẽ biên thư về
                    sau."
                </p>
            </div>
        </div>
    );
}
