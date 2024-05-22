import { useRef, useEffect } from 'react';
import styles from './style.module.css';

export default function Index() {
    const header = useRef(null);

    useEffect(() => {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                header.current.style.top = '0';
            } else {
                header.current.style.top = '-80px';
            }
            prevScrollpos = currentScrollPos;
        };
    }, []);

    console.log(header);

    return (
        <div className={styles.header} ref={header}>
            {/* <button className={styles.navigationList}>
                <i class="fas fa-bars"></i>
            </button> */}
            <ul className={styles.navigation}>
                <li>
                    <a href="#">Giới thiệu</a>
                </li>
                <li>
                    <a href="#">Giai đoạn</a>
                    <ul className={styles.subnav}>
                        <li>
                            <a href="#project1">TIỀN LỊCH SỬ VÀ SƠ KHAI DỰNG NƯỚC</a>
                        </li>
                        <li>
                            <a href="#project2">ĐẤU TRANH GIỮ NƯỚC</a>
                        </li>
                        <li>
                            <a href="#project3">PHONG KIẾN XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC</a>
                        </li>
                        <li>
                            <a href="#project4">ĐẤU TRANH GIẢI PHÓNG DÂN TỘC</a>
                        </li>
                        <li>
                            <a href="#project5">THỐNG NHẤT ĐẤT NƯỚC</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#chungtich">Chứng tích</a>
                </li>
                <li>
                    <a href="#noidau">Nỗi đau</a>
                </li>
                <li>
                    <a href="#vanhoa">Văn hóa</a>
                </li>
            </ul>
        </div>
    );
}
