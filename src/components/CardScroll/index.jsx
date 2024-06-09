'use client';
import styles from './style.module.css';
import Card from '../Card';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

import { amthuc, aodai, luanuoc, nonla, thocung } from '@/data';

export default function Index() {
    const projects = [
        {
            title: 'Áo dài',
            description:
                'Áo dài, một biểu tượng văn hóa đặc trưng của Việt Nam, không chỉ là trang phục mà còn là biểu tượng của sự đẹp đẽ, duyên dáng và tinh tế. Mỗi đường nét trên bức tranh áo dài đều là câu chuyện về sự kiêu sa, thanh lịch và kiêu hãnh của dân tộc Việt Nam. Nhìn thấy áo dài, người ta không chỉ nhớ về vẻ đẹp truyền thống mà còn nhớ về sức mạnh của một dân tộc đã từng trải qua nhiều thăng trầm trong lịch sử. Áo dài là niềm tự hào của dân tộc Việt Nam, là biểu tượng của sự kiêu hãnh và lòng yêu nước.',
            src: aodai,
            link: 'https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/',
            color: '#BBACAF',
        },
        {
            title: 'Nón lá',
            description:
                'Nón lá, một biểu tượng văn hóa đậm đà bản sắc Việt Nam, mang trong mình không chỉ vẻ đẹp giản dị mà còn cả niềm tự hào dân tộc sâu sắc. Từ bao đời nay, nón lá đã chứng kiến bao thăng trầm lịch sử, trở thành biểu tượng của sự kiên cường, bền bỉ và duyên dáng của người phụ nữ Việt Nam.',
            src: nonla,
            link: 'https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/',
            color: '#977F6D',
        },
        {
            title: 'Trồng lúa nước',
            description:
                'Từ bao đời nay, người nông dân Việt Nam đã gắn bó với cây lúa, coi đó là nguồn sống và là biểu tượng của sự cần cù, chịu khó và sáng tạo. Trong những cánh đồng mênh mông, ta thấy được sự khéo léo trong việc dẫn nước vào ruộng, kinh nghiệm chọn giống, và những kỹ thuật canh tác độc đáo, thể hiện sự thông minh và tinh thần vượt khó của con người Việt Nam.',
            src: luanuoc,
            link: 'https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/',
            color: '#B62429',
        },
        {
            title: 'Thờ cúng tổ tiên',
            description:
                'Văn hóa thờ cúng tổ tiên là một nét đẹp truyền thống, biểu hiện sâu sắc của lòng biết ơn và tinh thần gắn kết gia đình trong văn hóa Việt Nam. Qua văn hóa thờ cúng tổ tiên, người Việt Nam không chỉ thể hiện lòng biết ơn sâu sắc mà còn khẳng định ý thức về sự nối tiếp và phát triển của gia đình và dòng họ. Đây là một trong những giá trị cốt lõi của văn hóa Việt Nam, góp phần giữ gìn và phát huy bản sắc dân tộc trong dòng chảy của thời gian.',
            src: thocung,
            link: 'https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/',
            color: '#88A28D',
        },
        {
            title: 'Ẩm thực',
            description:
                'Ẩm thực Việt Nam là một bức tranh đa sắc màu, phản ánh tinh hoa và sự phong phú của đất nước. Từ những món ăn giản dị hàng ngày đến những đặc sản vùng miền, ẩm thực Việt Nam luôn chinh phục lòng người bằng hương vị tinh tế và sự cân bằng hoàn hảo của các nguyên liệu. Không chỉ những món ăn nối tiếng, mỗi vùng miền của Việt Nam còn có những đặc sản riêng tạo nên sự đa dạng và phong phú không nơi nào có được.',
            src: amthuc,
            link: 'https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/',
            color: '#C2491D',
        },
    ];

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    });

    return (
        <div ref={container} className={styles.main}>
            <h1 style={{ color: 'black', textAlign: 'center', paddingTop: '20px' }}>Những nét đẹp văn hóa </h1>
            {projects.map((project, i) => {
                const targetScale = 1 - (projects.length - i) * 0.05;
                return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />;
            })}
        </div>
    );
}
