'use client';
import styles from './sumenh.module.css';
import Image from 'next/image';

import { sumenh } from '@/data';
import { Contact } from '@/components';
import DefaultLayout from '@/layouts/defaultLayout';

export default function Vanhoa() {
    return (
        <main className={styles.main}>
            <DefaultLayout>
                <section className={styles.hero}>
                    <div className={styles.heading}>
                        <h1>Sứ Mệnh</h1>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.heroContent}>
                            <h2>Sứ mệnh của chúng tôi</h2>
                            <p>
                                Việt Nam hùng cường - nơi khám phá và tôn vinh vẻ đẹp đa dạng của lịch sử và văn hóa Việt Nam. Sứ mệnh của chúng tôi
                                là mang đến cho bạn những câu chuyện sâu sắc về những chứng tích lịch sử, từ những di tích kiến trúc cổ kính đến những
                                nét văn hóa đặc trưng đậm chất dân tộc. Chúng tôi cam kết khám phá và truyền cảm hứng về sự phát triển của dân tộc
                                Việt Nam qua các thời kỳ, từ những trang sử hào hùng đến những nghệ nhân tài hoa đã góp phần làm nên bản sắc văn hoá
                                độc đáo của chúng ta. Hãy cùng chúng tôi trải nghiệm và khám phá vẻ đẹp văn hóa và lịch sử rực rỡ của đất nước Việt
                                Nam, để ta hiểu rõ hơn về những giá trị văn hoá vượt thời gian và không gian của chúng ta.
                            </p>
                        </div>
                        <div className={styles.heroImage}>
                            <Image src={sumenh} alt="" />
                        </div>
                    </div>
                </section>

                {/* <Contact /> */}
            </DefaultLayout>
        </main>
    );
}
