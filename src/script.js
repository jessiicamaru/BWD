import {
    gd2,
    gd3,
    meChoCon,
    ty,
    tsdd,
    project1,
    project1_1,
    project2,
    project3,
    project3_3,
    project4,
    project5_1,
    project2_2,
    project3_1,
    project3_2,
    project4_2,
    project4_3,
    project4_1,
    project5,
    project5_2,
    project5_3,
    amthuc,
    aodai,
    luanuoc,
    nonla,
    descriptionImg,
    thocung,
    vhdescription,
    pi1,
    pi2,
    pi3,
    pi4,
    pi5,
    mnhv1,
    mnhv2,
    mnhv3,
    vhsl11,
    vhsl12,
    vhsl13,
    vhsl21,
    vhsl22,
    vhsl23,
    vhsl31,
    vhsl32,
    vhsl33,
    vhsl41,
    vhsl42,
    vhsl43,
    vhsl51,
    vhsl52,
    vhsl53,
} from './data';

export default {
    navigationPage1: [
        {
            href: '#',
            content: 'Giới thiệu',
            subnav: null,
        },
        {
            href: '#',
            content: 'Giai đoạn',
            subnav: [
                {
                    href: '#project1',
                    content: 'TIỀN LỊCH SỬ VÀ SƠ KHAI DỰNG NƯỚC',
                    subnav: null,
                },
                {
                    href: '#project2',
                    content: 'ĐẤU TRANH GIỮ NƯỚC',
                    subnav: null,
                },
                {
                    href: '#project3',
                    content: 'PHONG KIẾN XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC',
                    subnav: null,
                },
                {
                    href: '#project4',
                    content: 'ĐẤU TRANH GIẢI PHÓNG DÂN TỘC',
                    subnav: null,
                },
                {
                    href: '#project5',
                    content: 'THỐNG NHẤT ĐẤT NƯỚC',
                    subnav: null,
                },
            ],
        },
        {
            href: '#chungtich',
            content: 'Chứng tích',
            subnav: null,
        },
        {
            href: '#noidau',
            content: 'Nỗi đau',
            subnav: null,
        },
        {
            href: '#vanhoa',
            content: 'Văn hóa',
            subnav: null,
        },
    ],
    navigationVanhoaPage: [
        {
            href: '#',
            content: 'Giới thiệu',
            subnav: null,
        },
        {
            href: '#truyenthong',
            content: 'Truyền thống',
            subnav: null,
        },
        {
            href: '#disan',
            content: 'Di sản',
            subnav: null,
        },
    ],
    navigationChungtichPage: [
        {
            href: '#',
            content: 'Giới thiệu',
            subnav: null,
        },
        {
            href: '#disan',
            content: 'Di sản',
            subnav: null,
        },
        {
            href: '#dauan',
            content: 'Dấu ấn',
            subnav: null,
        },
    ],
    project: {
        script1: {
            mainImage: project1,
            title: 'Giai đoạn Tiền lịch sử và sơ khai dựng nước',
            description: [
                {
                    content:
                        'Việt Nam nằm trong khu vực được xem là cái nôi của nhân loại, một trong những trung tâm nông nghiệp trồng lúa nước sớm nhất, nơi diễn ra các cuộc cách mạng đá và luyện kim. Người ta thường hay nhắc tới các truyền thuyết về Kinh Dương Vương, Lạc Long Quân, Phù Đổng Thiên Vương, Sơn Tinh – Thủy Tinh nhằm giải thích nguồn gốc và sự đấu tranh để tồn tại của dân tộc. ',
                    image: '',
                },
                {
                    content:
                        'Văn Lang – nhà nước đầu tiên của Việt Nam được thành lập vào thế kỷ thứ 7 trước Công nguyên, nhờ cần cù lao động và tính sáng tạo của mình cư dân Văn Lang đã tạo nên một nền văn minh có ảnh hướng tới toàn bộ khu vực Đông Nam Á đó chính là là nền văn minh sông Hồng (hay văn minh Đông Sơn) mà biểu tượng  là trống đồng Đông Sơn - một di sản phản ánh tinh hoa lối sống, truyền thống và văn hóa của người Việt Cổ. ',
                    image: {
                        src: project1_1,
                        position: '',
                        comment: 'Trống đồng Đông Sơn',
                    },
                },
            ],
        },

        script2: {
            mainImage: project2,
            title: 'Giai đoạn đấu tranh giữ nước',
            description: [
                {
                    content:
                        'Từ thế kỷ thứ 2 trước Công nguyên, nước ta đã bị các triều đại Trung Quốc khác nhau thống trị trong hơn một nghìn năm, trong thời kỳ này sự tồn vong của dân tộc bị thử thách đã khơi dậy tinh thần bất khuất kiên cường của người dân Việt Nam.',
                    image: '',
                },
                {
                    content:
                        'Có những phong trào tiêu biểu chống lại quân xâm lược phương như Hai Bà Trưng nổi dậy được tự chủ chính quyền trong 3 năm, Lý Bí nổi dậy đánh đuổi Thứ sử giao Châu tự xưng là Lý Nam Đế lập ra nhà nước tự chủ Vạn Xuân hay khởi nghĩa Phùng năm 776 giành được tự chủ trong thời gian ngắn,...',
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
                    image: {
                        src: project2_2,
                        position: '',
                    },
                },
            ],
        },

        script3: {
            mainImage: project3,
            title: 'Giai đoạn phong kiến xây dựng và bảo vệ tổ quốc',
            description: [
                {
                    content:
                        'Chiến thắng Bạch Đằng năm 938 đã chấm dứt thời kỳ 1000 năm Bắc thuôc.  Mở ra kỷ nguyên mới trong lịch sử Việt Nam - kỷ nguyên phát triển của nhà nước phong kiến độc lập, kỷ nguyên xây dựng và bảo vệ tổ quốc.',
                    image: '',
                },
                {
                    content:
                        'Sau đó, Việt Nam bước vào thời kỳ phục hưng và phát triển dưới các triều đại Lý, Trần, Hồ, Lê Sơ. Đại Việt – tên nước dưới thời Lý – Trần – Lê Sơ được biết đến là một đất nước thịnh vượng ở Châu Á. Đánh dấu thời kỳ hoàng kim của lịch sử Việt Nam.',
                    image: {
                        src: project3_1,
                        position: '',
                        comment: 'Chiến thằng trên sông bạch đằng năm 938',
                    },
                },
                {
                    content:
                        'Một thành tựu quan trọng của triều đại Lý – Trần là sự ra đời của chữ Nôm. Ngoài ra, thời kỳ này còn đánh dấu sự phát triển huy hoàng về giáo dục, khoa học, văn hóa, nghệ thuật, luật pháp,… Thời kỳ này được gọi là thời đại văn minh Đại Việt. Thăng Long (tên cũ của thủ đô Hà Nội) được chính thức công nhận là kinh đô của Đại Việt theo tuyên bố dời đô về Hà Nội năm 1010 của Lý Thái Tổ.',
                    image: {
                        src: project3_2,
                        position: '',
                    },
                },
                {
                    content:
                        'Từ thế kỷ 16, sự lạc hậu, yếu kém của chế độ phong kiến theo tư tưởng Khổng Tử lộ rõ, chế độ phong kiến rơi vào tình trạng suy tàn. Đại Việt sa lầy vào nội chiến, chia rẽ, cản trở nặng nề sự phát triển của đất nước bất chấp những phát triển nhất định về kinh tế, văn hóa, thương mại, giao lưu giữa thế kỷ 16 và 18.',
                    image: {
                        src: project3_3,
                        position: '',
                    },
                },
            ],
        },

        script4: {
            mainImage: project4,
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
                    image: {
                        src: project4_1,
                        position: '',
                        comment: 'Pháp đổ bộ tiến công vào nước ta',
                    },
                },
                {
                    content:
                        'Ngày 2/9/1945, tại quảng trường Ba Đình (Hà Nội) thay mặt Chính phủ lâm thời, Chủ tịch Hồ Chí Minh đọc bản tuyên ngôn độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa. Cách mạng Tháng Tám thành công là thắng lợi vĩ đại đầu tiên của Nhân dân ta từ khi có Đảng lãnh đạo, mở ra bước ngoặt vĩ đại trong lịch sử. Nước Việt Nam từ một nước thuộc địa nửa phong kiến trở thành một nước độc lập, tự do và dân chủ.',
                    image: {
                        src: project4_2,
                        position: '',
                    },
                },
                {
                    content: '',
                    image: {
                        src: project4_3,
                        position: '',
                    },
                },
            ],
        },

        script5: {
            mainImage: project5,
            title: 'Giai đoạn thống nhất đất nước',
            description: [
                {
                    content:
                        'Chiến thắng lừng lẫy năm châu chấn động địa cầu tại Điện Biên Phủ buộc Pháp ngồi vào bàn ký Hiệp định Geneva năm 1954 đánh dấu kết thúc cuộc kháng chiến chống Pháp, mở ra thời kỳ độc lập mới cho Việt Nam. ',
                    image: '',
                },
                {
                    content:
                        'Miền Bắc bước vào chủ nghĩa xã hội, trong khi miền Nam tạm dưới kiểm soát Pháp và Mỹ chờ tổng tuyển cử nhưng đã bị Hoa Kỳ can thiệp và không bao giờ diễn ra. Mỹ thành lập nước Cộng hòa miền Nam do Ngô Đình Diệm đứng đầu. Tạo ra sự chia cắt kéo dài hơn 20 năm cho Việt Nam.',
                    image: {
                        src: project5_1,
                        position: '',
                        comment: 'Chiến thắng chấn động năm châu Điện Biên Phủ',
                    },
                },
                {
                    content:
                        'Từ năm 1954 đến năm 1975, Việt Nam lại phải tiến hành một cuộc chiến tranh giải phóng và thống nhất đất nước. Với bao gian khổ, chiến tranh đã kết thúc thắng lợi sau Chiến dịch Hồ Chí Minh lịch sử năm 1975.',
                    image: {
                        src: project5_2,
                        position: '',
                        comment: 'Miền Bắc xây dựng Chủ nghĩa xã hội',
                    },
                },
                {
                    content:
                        'Chiến dịch Hồ Chí Minh đã đi vào lịch sử dân tộc như một mốc son chói lọi nhất, một biểu tượng về sự đoàn kết, anh dũng chiến đấu để gìn giữ dân tộc. Từ đó đến nay, nước Việt Nam thống nhất và đã mở ra một kỷ nguyên mới. Kỷ nguyên của hòa bình, thống nhất, độc lập tự do và xây dựng đất nước.',
                    image: {
                        src: project5_3,
                        position: '',
                        comment: 'Xe tăng húc đổ cổng Dinh Độc Lập, kết thúc chiến dịch Hồ Chí Minh lịch sử',
                    },
                },
                {
                    content: '',
                    image: '',
                },
            ],
        },
    },

    letters: {
        letters1: {
            imgs: [gd2, gd3],
            title: 'Những mái ấm không trọn vẹn',
        },
        letters2: {
            imgs: [meChoCon],
            title: 'Những người mẹ mòn mỏi chờ con',
        },
        letters3: {
            imgs: [ty],
            title: 'Những mối tình tuổi 18 chưa thành',
        },
        letters4: {
            imgs: [tsdd],
            title: 'Giấc mơ đoàn tụ không thành',
        },
    },

    title: {
        title1: 'Những dòng tâm sự còn dang dở',
        title2: 'Và còn nhiều hơn thế nữa...',
    },

    gradientLetter: {
        gradientLetter1: {
            content:
                'Mẹ ạ! Trong hành trình này nhiều lúc đi đường con buồn lắm, nhớ nhà vô cùng mà lại vất vả nữa. Nhưng con luôn đấu tranh tinh thần, lúc này lùi lại một bước là sa ngã ngay. Vì vậy trong khi đi đường con luôn nhớ đến hình ảnh của mẹ dặn dò trước khi đi và lúc nào nghỉ thì con lại lấy thư của mẹ ra đọc để tự động viên tinh thần mình.',
            date: '20/9/69',
            author: 'Phạm Ngọc Hùng',
        },
        gradientLetter2: {
            content:
                'Bây giờ ta đang phải hy sinh tuổi thanh xuân nhưng chúng ta đã đóng góp công sức ta vào sự nghiệp lớn của dân tộc. Nên chúng ta hưởng hạnh phúc hơi muộn nhưng cũng như triệu triệu người tin rằng ngày đó mới đầm ấm và hạnh phúc gấp vạn lần.',
            date: '5/11/66',
            author: 'Liệt sĩ Trần Minh Tiến',
        },
    },

    gradientText: {
        gradientText1:
            'Lịch sử Việt Nam là một chuỗi các trang sử hào hùng, đầy kiêu hãnh nhưng cũng không kém phần bi thương vì những cuộc chiến tranh tàn khốc. Mỗi một cuộc chiến tranh đều để lại những vết thương và nỗi đau sâu sắc hằn mãi trong tâm hồn người Việt….',
        gradientText2:
            'Thế hệ đi trước đã hy sinh từng giọt máu, từng hơi thở để bảo vệ đất nước, bảo vệ niềm tự hào dân tộc và nền văn hóa của cha ông. Dù trong hoàn cảnh khó khăn nào, họ vẫn vun đắp và truyền bá những giá trị văn hóa bền vững. Văn hóa là đòn bẩy để giữ vững tinh thần và nhận diện dân tộc trong bao biến cố lịch sử. Chính sự kiên cường và lòng tự hào về văn hóa đã giúp họ vượt qua mọi khó khăn, góp phần vào sự nghiệp xây dựng và phát triển đất nước.',
    },

    cardScroll: [
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
    ],

    chungtichPage: {
        preLoader: ['Những', 'Dấu', 'Ấn', 'Sống', 'Động', 'Của', 'Quá', 'Khứ'],
        landing: 'Chứng tích lịch sử',
        description: {
            phrase1:
                'Việt Nam có rất nhiều chứng tích lịch sử quan trọng, từ các di chỉ khảo cổ, các công trình kiến trúc đến những sự kiện lịch sử và các kỷ vật có giá trị. Những chứng tích này đóng vai trò lưu giữ và bảo tồn di sản văn hóa lịch sử, hơn nữa góp phần giáo dục, tôn vinh và thúc đẩy nhận thức về lịch sử, văn hóa dân tộc.',
            img: descriptionImg,
        },
        projects: [
            {
                title: 'Dấu ấn',
                src: mnhv1,
                color: '#8C8C8C',
                subtitle: 'Chứng tích',
            },
            {
                title: 'Ống kính lịch sử',
                src: mnhv2,
                color: '#EFE8D3',
                subtitle: 'Thước phim',
            },
            {
                title: 'Khoảnh khắc',
                src: mnhv3,
                color: '#706D63',
                subtitle: 'Hình ảnh',
            },
        ],
        projectsImages: [
            {
                itemIndex: 1,
                itemName: 'Thành cổ Quảng Trị',
                itemImage: pi1,
                itemDescription:
                    'Thành cổ Quảng Trị là một trong những di tích lịch sử quan trọng ở tỉnh Quảng Trị, miền Trung Việt Nam. Được xây dựng vào thế kỷ 19, Thành cổ Quảng Trị từng là một trong những căn cứ quan trọng của quân đội Việt Nam trong cuộc kháng chiến chống lại thực dân Pháp và cuộc chiến tranh chống Mỹ cứu nước.',
                itemDescription2:
                    'Thành cổ Quảng Trị là sự kiên cường, sự kiên định và tinh thần đoàn kết trong lòng dân tộc. Nó cho chúng ta thấy rằng chỉ có bằng sự đoàn kết và hy sinh thì mới có thể giữ vững được chủ quyền đất nước và bảo vệ được an ninh biên giới. Thành cổ Quảng Trị là minh chứng cho sự tự hào và niềm tin của người Việt Nam vào lịch sử và văn hóa của mình, đồng thời là một hành trình ghi dấu những trang sử vĩ đại trong lòng mỗi người con dân Việt Nam.',
            },
            {
                itemIndex: 2,
                itemName: 'Hoàng thành Thăng Long',
                itemImage: pi2,
                itemDescription:
                    'Hoàng thành Thăng Long, hay còn gọi là Cố đô Hà Nội, là trái tim văn hóa của thủ đô nghìn năm văn hiến. Được xây dựng từ thế kỷ 11, Hoàng thành Thăng Long là biểu tượng của sự giàu có và bền vững của văn hóa Việt.',
                itemDescription2:
                    'Hoàng thành Thăng Long cho thấy rằng, sự phát triển bền vững của một quốc gia không chỉ dựa vào sức mạnh quân sự mà còn phụ thuộc vào sự bảo tồn và phát triển văn hóa, nghệ thuật, kiến trúc. Hoàng thành Thăng Long là biểu tượng cho sự tự hào dân tộc, nơi ghi dấu những thành tựu văn hóa, khoa học và đóng góp của các triều đại lớn trong lịch sử phát triển của Việt Nam.',
            },
            {
                itemIndex: 3,
                itemName: 'Đền Hùng - Phú Thọ',
                itemImage: pi3,
                itemDescription:
                    'Đền Hùng là nơi tôn vinh 18 vị vua Hùng, những người được coi là các vị vua sáng lập nền văn minh và dân tộc Việt Nam từ hàng ngàn năm trước. Nơi đây tổ chức Lễ hội Đền Hùng vào ngày 10/3 âm lịch hàng năm, thu hút đông đảo du khách và người dân tham gia.',
                itemDescription2:
                    'Lễ hội Đền Hùng không chỉ là dịp để tưởng nhớ và tôn vinh các vị vua Hùng, mà còn là cơ hội để mỗi người Việt nhớ lại và học hỏi về truyền thống tôn sùng tổ tiên, lòng yêu nước sâu sắc và sự đoàn kết của dân tộc. Đây là sự kiện quan trọng giúp khẳng định và duy trì những giá trị văn hóa, lịch sử quan trọng của dân tộc Việt Nam.',
            },
            {
                itemIndex: 4,
                itemName: 'Di tích Tràng An',
                itemImage: pi4,
                itemDescription:
                    'Di tích Tràng An là một trong những khu du lịch sinh thái và văn hóa nổi tiếng của Việt Nam, nằm ở thị xã Hoa Lư, tỉnh Ninh Bình. Được UNESCO công nhận là Di sản Văn hóa và Thiên nhiên thế giới vào năm 2014, Tràng An là một trong những điểm đến không thể bỏ qua khi du lịch Ninh Bình.',
                itemDescription2:
                    'Tràng An là minh chứng rực rỡ cho sự hài hòa giữa con người và thiên nhiên. Với hệ thống hang động và hệ sinh thái phong phú, khu vực này đã từng là nơi sinh sống của các cộng đồng cổ đại từ hàng ngàn năm trước. Các di tích tại đây còn lưu giữ nhiều dấu ấn văn hóa của người Việt xưa, từ các hầm mộ đến những nơi tín ngưỡng và sinh hoạt.',
            },
            {
                itemIndex: 5,
                itemName: 'Di tích Mỹ Sơn',
                itemImage: pi5,
                itemDescription:
                    'Mỹ Sơn là một quần thể đền tháp của người Chăm cổ, nằm ở Quảng Nam. Được xây dựng từ thế kỷ 4 đến thế kỷ 14, Mỹ Sơn là một trong những điểm tham quan lịch sử và văn hóa hấp dẫn nhất miền Trung Việt Nam.',
                itemDescription2:
                    'Mỹ Sơn là minh chứng cho sự phát triển của văn hóa Chăm và mối quan hệ văn hóa giao lưu giữa các dân tộc trên đất nước Việt Nam. Đây là di sản văn hóa quan trọng, thể hiện sự đa dạng và phong phú của văn hóa Việt Nam.',
            },
        ],
    },

    vanhoaPage: {
        title: 'Bạn đã sẵn sàng khám phá văn hóa Việt Nam chưa?',
        description: {
            content:
                'Ẩm thực Việt Nam không chỉ là nghệ thuật ẩm thực mà còn là một biểu tượng của sự kết hợp tinh tế giữa truyền thống và khoa học. Mỗi món ăn thể hiện rõ bản sắc văn hóa địa phương và được chế biến với sự khéo léo, từ những kỹ thuật nấu nướng lâu đời đến những cách thức hiện đại. Việt Nam là nơi bạn có thể khám phá những hương vị đa dạng và sự sáng tạo vượt thời gian, mang đến trải nghiệm ẩm thực độc đáo và phong phú',
            img: vhdescription,
        },
        section: {
            phrase1:
                'Văn hóa Việt Nam là sự kết hợp của các yếu tố truyền thống và sự sáng tạo không ngừng nghỉ. Sự hòa quyện ấy tạo ra một nền văn hóa đa dạng, phong phú và độc đáo làm nên sức hút đặc biệt của nền văn hóa này.',
            phrase2: 'Nền văn hóa độc đáo',
        },
        scroll: [
            {
                title: 'Lễ hội truyền thống',
                subtitle: 'Tôn vinh nét đẹp xưa ',
                imgs: [vhsl11, vhsl12, vhsl13],
            },
            {
                title: 'Thờ cúng tổ tiên',
                subtitle: 'Nhớ ơn tổ tiên',
                imgs: [vhsl21, vhsl22, vhsl23],
            },
            {
                title: 'Trồng lúa nước',
                subtitle: ' Nền nông nghiệp lâu đời',
                imgs: [vhsl31, vhsl32, vhsl33],
            },
            {
                title: 'Nghệ thuật dân gian',
                subtitle: 'Duy trì nền nghệ thuật',
                imgs: [vhsl41, vhsl42, vhsl43],
            },
            {
                title: 'Áo dài',
                subtitle: 'Nét đẹp Việt Nam',
                imgs: [vhsl51, vhsl52, vhsl53],
            },
        ],
    },
};
