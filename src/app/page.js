'use client';
import { useEffect } from 'react';
import styles from './page.module.css';
import Intro from '../components/Intro';
import Description from '../components/Description';
import Projects from '../components/Projects';
import FloatingImage from '../components/FloatingImage';
import MaskText from '../components/MaskText';
import ParallaxScroll from '../components/ParallaxScroll';
import GradientText from '../components/GradientText';
import Letters from '../components/Letters';
import CardScroll from '../components/CardScroll';

import { gd2, gd3, meChoCon, ty, tsdd, nnmm } from '../data';

export default function Home() {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);

    return (
        <main className={styles.main}>
            <Intro />
            <Description />
            {/* <div className={styles.background}>
            </div> */}
            <Projects
                imageAtLeft={false}
                content={{
                    title: 'Giai đoạn Tiền lịch sử và sơ khai dựng nước',
                    description: [
                        {
                            content:
                                'Việt Nam nằm trong khu vực được xem là cái nôi của nhân loại, một trong những trung tâm nông nghiệp trồng lúa nước sớm nhất, nơi diễn ra các cuộc cách mạng đá và luyện kim. Người ta thường hay nhắc tới các truyền thuyết về Kinh Dương Vương, Lạc Long Quân, Phù Đổng Thiên Vương, Sơn Tinh – Thủy Tinh nhằm giải thích nguồn gốc và sự đấu tranh để tồn tại của dân tộc. ',
                            image: '',
                        },
                        {
                            content:
                                'Văn Lang – nhà nước đầu tiên của VN được thành lập vào thế kỷ thứ 7 trước Công nguyên, nhờ cần cù lao động và tính sáng tạo của mình cư dân Văn Lang đã tạo nên một nền văn minh có ảnh hướng tới toàn bộ khu vực Đông Nam Á đó chính là là nền văn minh sông Hồng (hay văn minh Đông Sơn) mà biểu tượng  là trống đồng Đông Sơn - một di sản phản ánh tinh hoa lối sống, truyền thống và văn hóa của người Việt Cổ. ',
                            image: '',
                        },
                    ],
                }}
            />

            <Projects
                imageAtLeft={true}
                content={{
                    title: 'Giai đoạn đấu tranh giữ nước',
                    description: [
                        {
                            content:
                                'Từ thế kỷ thứ 2 trước Công nguyên, nước ta đã bị các triều đại Trung Quốc khác nhau thống trị trong hơn một nghìn năm, trong thời kỳ này sự tồn vong của dân tộc bị thử thách đã khơi dậy tinh thần bất khuất kiên cường của người dân Việt Nam.',
                            image: '',
                        },
                        {
                            content:
                                'Có những phong trào tiêu biểu như Hai Bà Trưng nổi dậy được  tự chủ chính quyền trong 3 năm, Lý Bí nổi dậy đánh đuổi Thứ sử giao Châu tự xưng là Lý Nam Đế lập ra nhà nước tự chủ Vạn Xuân,…',
                            image: '',
                        },

                        {
                            content:
                                'Trong suốt 10 thế kỷ không lúc nào bọn đô hộ phương Bắc được ăn ngon, ngủ yên, phong trào đấu tranh của nhân dân ta nổ ra mạnh mẽ, liên tục, trên một không gian rộng lớn. Phong trào đã lôi cuốn được hàng vạn nhân dân, tầng lớp quan lại, binh lính người Việt tham gia, thậm chí có lúc còn kết hợp với phong trào đấu tranh của nhân dân Trung Quốc.',
                            image: '',
                        },
                        {
                            content:
                                'Các phong trào đấu tranh của nhân dân ta đã làm cho kẻ thù suy yếu, đồng thời cổ vũ tinh thần đấu tranh của nhân dân ta, tạo điều kiện cho sự ra đời của chính quyền tự chủ ở thế kỷ 10.',
                            image: '',
                        },
                    ],
                }}
            />

            <Projects
                imageAtLeft={false}
                content={{
                    title: 'Giai đoạn phong kiến xây dựng và bảo vệ tổ quốc',
                    description: [
                        {
                            content:
                                'Từ thế kỷ thứ 2 trước Công nguyên, nước ta đã bị các triều đại Trung Quốc khác nhau thống trị trong hơn một nghìn năm, trong thời kỳ này sự tồn vong của dân tộc bị thử thách đã khơi dậy tinh thần bất khuẩt kiên cường của người dân Việt Nam.',
                            image: '',
                        },
                        {
                            content:
                                'Chiến thắng Bạch Đằng năm 938 đã chấm dứt thời kỳ 1000 năm Bắc thuôc.  Mở ra kỷ nguyên mới trong lịch sử Việt Nam - kỷ nguyên phát triển của nhà nước phong kiến độc lập, kỷ nguyên xây dựng và bảo vệ tổ quốc.',
                            image: '',
                        },
                        {
                            content:
                                'Sau đó, Việt Nam bước vào thời kỳ phục hưng và phát triển dưới các triều đại Lý, Trần, Hồ, Lê Sơ. Đại Việt – tên nước dưới thời Lý – Trần – Lê Sơ được biết đến là một đất nước thịnh vượng ở Châu Á. Đánh dấu thời kỳ hoàng kim của lịch sử Việt Nam.',
                            image: '',
                        },
                        {
                            content:
                                'Một thành tựu quan trọng của triều đại Lý – Trần là sự ra đời của chữ Nôm. Ngoài ra, thời kỳ này còn đánh dấu sự phát triển huy hoàng về giáo dục, khoa học, văn hóa, nghệ thuật, luật pháp,… Thời kỳ này được gọi là thời đại văn minh Đại Việt. Thăng Long (tên cũ của thủ đô Hà Nội) được chính thức công nhận là kinh đô của Đại Việt theo tuyên bố dời đô về Hà Nội năm 1010 của Lý Thái Tổ.',
                            image: '',
                        },
                        {
                            content:
                                'Từ thế kỷ 16, sự lạc hậu, yếu kém của chế độ phong kiến theo tư tưởng Khổng Tử lộ rõ, chế độ phong kiến rơi vào tình trạng suy tàn. Đại Việt sa lầy vào nội chiến, chia rẽ, cản trở nặng nề sự phát triển của đất nước bất chấp những phát triển nhất định về kinh tế, văn hóa, thương mại, giao lưu giữa thế kỷ 16 và 18.',
                            image: '',
                        },
                    ],
                }}
            />

            <Projects
                imageAtLeft={true}
                content={{
                    title: 'Giai đoạn đấu tranh giải phóng dân tộc',
                    description: [
                        {
                            content:
                                'Thế kỷ 19, Pháp xâm chiếm nước ta. Lần đầu tiên trong lịch sử chúng ta đương đầu với sự xâm lược của một nước phương Tây. Trong tình thế khó khăn đó đã có một bộ phận trí thức đưa ra những cải cách nhưng đều bị nhà Nguyễn bác bỏ. Sau đó đất nước rơi vào tình trạng lạc hậu, bế tắc. Việt Nam trở thành thuộc địa nửa phong kiến trong gần 100 năm từ 1858 đến 1945.',
                            image: '',
                        },
                        {
                            content:
                                'Tháng 8 năm 1945, dưới sự lãnh đạo của Đảng Cộng sản do Nguyễn Ái Quốc (sau này là Chủ tịch Hồ Chí Minh) đứng đầu đã phát động thành công cuộc tổng khởi nghĩa giành chính quyền. Chiều ngày 30/8/1945  Vua Bảo Đại trao lại ấn kiếm cho đại diện Chính phủ cách mạng dưới sự lãnh đạo của Chủ tịch Hồ Chí Minh, chấm dứt vĩnh viễn chế độ quân chủ tại Việt Nam.',
                            image: '',
                        },
                        {
                            content:
                                'Ngày 2/9/1945, tại quảng trường Ba Đình (Hà Nội) thay mặt Chính phủ lâm thời, Chủ tịch Hồ Chí Minh đọc bản tuyên ngôn độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.',
                            image: '',
                        },
                    ],
                }}
            />

            <Projects
                imageAtLeft={false}
                content={{
                    title: 'Giai đoạn thống nhất đất nước',
                    description: [
                        {
                            content:
                                'Chiến thắng tại Điện Biên Phủ và Hiệp định Geneve năm 1954 đánh dấu kết thúc cuộc kháng chiến chống Pháp, mở ra thời kỳ độc lập mới cho Việt Nam. Miền Bắc bước vào chủ nghĩa xã hội, trong khi miền Nam tạm dưới kiểm soát Pháp và Mỹ, nhưng cuộc tổng tuyển cử đã bị Hoa Kỳ can thiệp và không bao giờ diễn ra. Mỹ thành lập nước Cộng hòa miền Nam do Ngô Đình Diệm đứng đầu. Tạo ra sự chia cắt kéo dài hơn 20 năm cho Việt Nam.',
                            image: '',
                        },
                        {
                            content:
                                'Từ năm 1954 đến năm 1975, Việt Nam lại phải tiến hành một cuộc chiến tranh giải phóng và thống nhất đất nước. Với bao gian khổ, chiến tranh đã kết thúc thắng lợi sau thắng lợi của Chiến dịch Hồ Chí Minh lịch sử năm 1975.',
                            image: '',
                        },
                        {
                            content:
                                'Từ đó đến nay, nước Việt Nam thống nhất và đã mở ra một kỷ nguyên mới. Kỷ nguyên của hòa bình, thống nhất, độc lập tự do và xây dựng đất nước',
                            image: '',
                        },
                        {
                            content: '',
                            image: '',
                        },
                    ],
                }}
            />

            <FloatingImage />

            <GradientText
                content={
                    'Lịch sử Việt Nam là một chuỗi các trang sử hào hùng, đầy kiêu hãnh nhưng cũng không kém phần bi thương vì những cuộc chiến tranh tàn khốc. Mỗi một cuộc chiến tranh đều để lại những vết thương và nỗi đau sâu sắc hằn mãi trong tâm hồn người Việt….'
                }
            />

            <Letters imgs={[gd2, gd3]} title={'Những mái ấm không trọn vẹn'} imgAtLeft={false} />

            <Letters imgs={[meChoCon]} title={'Những người mẹ mòn mỏi chờ con'} imgAtLeft={true} />

            <Letters imgs={[ty]} title={'Những mối tình tuổi 18 chưa thành'} imgAtLeft={false} />

            <Letters imgs={[tsdd]} title={'Giấc mơ đoàn tụ không thành'} imgAtLeft={true} />

            <GradientText
                content={
                    'Mẹ ạ! Trong hành trình này nhiều lúc đi đường con buồn lắm, nhớ nhà vô cùng mà lại vất vả nữa. Nhưng con luôn đấu tranh tinh thần, lúc này lùi lại một bước là sa ngã ngay. Vì vậy trong khi đi đường con luôn nhớ đến hình ảnh của mẹ dặn dò trước khi đi và lúc nào nghỉ thì con lại lấy thư của mẹ ra đọc để tự động viên tinh thần mình.'
                }
                fontFamily={'BeCool'}
                fontSize={'21px'}
            />

            <ParallaxScroll />

            <GradientText />

            <MaskText />

            <CardScroll />
        </main>
    );
}
