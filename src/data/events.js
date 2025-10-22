export const events = [
    {
        code: 'TENTEST',
        name: 'KontumPlus Future Challenge 2025',
        tagline: 'Bootcamp 03 ngày giúp các tài năng trẻ kiến tạo giải pháp chuyển đổi số cho Kontum.',
        description:
            'Future Challenge là chương trình được thiết kế dành cho những bạn trẻ mong muốn phát triển sự nghiệp trong lĩnh vực chuyển đổi số, cung cấp kiến thức nền tảng, trải nghiệm thực tế và mạng lưới mentor chất lượng.',
        capacity: 80,
        hero: {
            eyebrow: 'Innovation Bootcamp',
            title: 'Future Challenge 2025',
            highlight: 'Bứt phá cùng đội ngũ mentor doanh nghiệp hàng đầu',
            summary:
                'Tham gia hành trình 03 ngày với workshop chuyên sâu, phòng lab trải nghiệm, và coaching 1:1 để xây dựng giải pháp công nghệ cho bài toán đô thị thông minh tại Kontum.',
            primaryActionLabel: 'Đăng ký ngay',
            secondaryActionLabel: 'Tải brochure chương trình',
            secondaryActionUrl: '#brochure'
        },
        theme: {
            primary: '#3b82f6',
            secondary: '#22d3ee',
            accent: '#f97316'
        },
        location: {
            venue: 'Innovation Hub KontumPlus',
            address: '19 Trần Phú, Thành phố Kon Tum',
            city: 'Kon Tum',
            mapUrl: 'https://maps.app.goo.gl/8RaNmrvkQTRsExample'
        },
        timeline: [
            { label: 'Mở đơn', date: '2025-10-01', description: 'Nhận hồ sơ trực tuyến từ các đội nhóm trên toàn quốc.' },
            { label: 'Đóng đơn', date: '2025-11-15', description: 'Sàng lọc hồ sơ và công bố danh sách 15 đội tham dự.' },
            { label: 'Bootcamp', date: '2025-12-05', description: 'Bootcamp 03 ngày tại KontumPlus Innovation Hub.' }
        ],
        highlights: [
            {
                title: 'Mentor doanh nghiệp',
                description: '15 mentor từ các công ty công nghệ, ngân hàng và startup sẽ đồng hành xuyên suốt bootcamp.',
                icon: 'users'
            },
            {
                title: 'Thử thách thực tế',
                description: 'Các bài toán về du lịch thông minh, y tế số, và logistic nội tỉnh giúp học viên áp dụng kiến thức ngay lập tức.',
                icon: 'target'
            },
            {
                title: 'Phát triển nghề nghiệp',
                description: 'Coaching 1-1 về lộ trình nghề nghiệp, xây dựng hồ sơ năng lực và phỏng vấn thử với HR doanh nghiệp.',
                icon: 'sparkles'
            }
        ],
        metrics: [
            { label: 'Tổng giải thưởng', value: '120.000.000₫' },
            { label: 'Mentor đồng hành', value: '15 chuyên gia' },
            { label: 'Thời lượng', value: '03 ngày chuyên sâu' }
        ],
        schedule: [
            {
                day: 'Ngày 1',
                date: '2025-12-05',
                summary: 'Khởi động và khám phá bài toán đô thị thông minh.',
                sessions: [
                    {
                        start: '08:30',
                        end: '09:00',
                        title: 'Check-in & Networking Breakfast',
                        description: 'Đón tiếp, kết nối các đội thi và mentor.',
                        tags: ['Networking']
                    },
                    {
                        start: '09:00',
                        end: '10:30',
                        title: 'Keynote: Bức tranh chuyển đổi số Kontum',
                        description: 'Lãnh đạo KontumPlus chia sẻ định hướng chiến lược chuyển đổi số của tỉnh.',
                        tags: ['Keynote']
                    },
                    {
                        start: '13:30',
                        end: '17:00',
                        title: 'Innovation Sprint',
                        description: 'Làm việc nhóm cùng mentor để phân tích bài toán và lên ý tưởng giải pháp.',
                        tags: ['Workshop']
                    }
                ]
            },
            {
                day: 'Ngày 2',
                date: '2025-12-06',
                summary: 'Phát triển sản phẩm mẫu và nhận coaching chuyên sâu.',
                sessions: [
                    {
                        start: '08:00',
                        end: '09:00',
                        title: 'Product Thinking Lab',
                        description: 'Chuyên gia thiết kế trải nghiệm người dùng hướng dẫn xây dựng hành trình khách hàng.',
                        tags: ['UX', 'Lab']
                    },
                    {
                        start: '10:30',
                        end: '12:00',
                        title: 'Tech Clinic 1-1',
                        description: 'Mentor công nghệ hỗ trợ hoàn thiện prototype cho từng đội.',
                        tags: ['Mentoring']
                    },
                    {
                        start: '14:00',
                        end: '17:30',
                        title: 'Coaching Pitch Deck',
                        description: 'Huấn luyện kỹ năng thuyết trình và kể chuyện sản phẩm.',
                        tags: ['Coaching']
                    }
                ]
            },
            {
                day: 'Ngày 3',
                date: '2025-12-07',
                summary: 'Hoàn thiện giải pháp và trình bày trước hội đồng chuyên gia.',
                sessions: [
                    {
                        start: '08:30',
                        end: '10:00',
                        title: 'Demo Rehearsal',
                        description: 'Chạy thử demo, nhận phản biện từ hội đồng chuyên môn.',
                        tags: ['Rehearsal']
                    },
                    {
                        start: '13:30',
                        end: '16:00',
                        title: 'Chung kết & Trao giải',
                        description: 'Top 5 đội trình bày giải pháp trước hội đồng doanh nghiệp và lãnh đạo tỉnh.',
                        tags: ['Final Pitch']
                    }
                ]
            }
        ],
        speakers: [
            {
                id: 'speaker-ngoc-linh',
                name: 'Nguyễn Ngọc Linh',
                title: 'Director of Digital Innovation',
                organization: 'KontumPlus',
                bio: 'Hơn 12 năm dẫn dắt các dự án chuyển đổi số trong lĩnh vực dịch vụ công và du lịch.',
                accentColor: '#6366f1'
            },
            {
                id: 'speaker-minh-khoa',
                name: 'Trần Minh Khoa',
                title: 'VP of Engineering',
                organization: 'Aquila Labs',
                bio: 'Chuyên gia xây dựng hệ thống dữ liệu lớn và giải pháp AI phục vụ chính quyền địa phương.',
                accentColor: '#f97316'
            },
            {
                id: 'speaker-thu-ha',
                name: 'Lê Thu Hà',
                title: 'Head of Product Design',
                organization: 'Sunrise Studio',
                bio: 'Cố vấn trải nghiệm người dùng với hơn 50 sản phẩm số thành công tại Việt Nam.',
                accentColor: '#10b981'
            }
        ],
        partners: [
            { name: 'KontumPlus', tier: 'Đơn vị tổ chức' },
            { name: 'Aquila Labs', tier: 'Tài trợ vàng' },
            { name: 'Sunrise Studio', tier: 'Đối tác chiến lược' }
        ],
        faqs: [
            {
                question: 'Đối tượng tham gia là ai?',
                answer: 'Sinh viên năm 3, 4 và các bạn trẻ dưới 28 tuổi quan tâm tới công nghệ và giải pháp đô thị thông minh.'
            },
            {
                question: 'Có cần kinh nghiệm lập trình không?',
                answer: 'Không bắt buộc. Chương trình chú trọng tư duy sản phẩm, làm việc nhóm và sẽ có mentor công nghệ hỗ trợ.'
            },
            {
                question: 'Ban tổ chức hỗ trợ chi phí như thế nào?',
                answer: 'Các đội được hỗ trợ chỗ ở, suất ăn trưa và tài liệu học tập trong suốt bootcamp.'
            }
        ],
        resources: {
            supportEmail: 'futurechallenge@kontumplus.net',
            hotline: '+84 869 123 456',
            facebookGroup: 'https://www.facebook.com/groups/kontumplus.futurechallenge'
        }
    },
    {
        code: 'EXPLORE2025',
        name: 'Explore Kontum Career Tour',
        tagline: 'Chuỗi tham quan doanh nghiệp giúp sinh viên Kon Tum khám phá nghề nghiệp tương lai.',
        description:
            'Chương trình trải nghiệm thực tế kéo dài 02 tuần, kết nối sinh viên với các doanh nghiệp công nghệ, du lịch và nông nghiệp công nghệ cao tại Kon Tum.',
        capacity: 120,
        hero: {
            eyebrow: 'Career Immersion',
            title: 'Explore Kontum 2025',
            highlight: 'Trải nghiệm doanh nghiệp, định hướng nghề nghiệp thực tiễn',
            summary:
                'Gặp gỡ lãnh đạo doanh nghiệp, tham quan nhà máy, tham gia workshop và nhận mentoring 1-1 để hiểu rõ nhu cầu nguồn nhân lực tại Kon Tum.',
            primaryActionLabel: 'Giữ chỗ trải nghiệm',
            secondaryActionLabel: 'Xem lịch trình chi tiết',
            secondaryActionUrl: '#schedule'
        },
        theme: {
            primary: '#f97316',
            secondary: '#0ea5e9',
            accent: '#22c55e'
        },
        location: {
            venue: 'Các doanh nghiệp đối tác tại Kon Tum',
            address: 'Kon Tum, Việt Nam',
            city: 'Kon Tum',
            mapUrl: 'https://maps.app.goo.gl/ExploreKontumCareerTour'
        },
        timeline: [
            { label: 'Đăng ký', date: '2025-08-01', description: 'Mở đăng ký dành cho sinh viên Kon Tum.' },
            { label: 'Phỏng vấn', date: '2025-08-20', description: 'Phỏng vấn nhóm để lựa chọn 60 bạn xuất sắc nhất.' },
            { label: 'Chương trình', date: '2025-09-05', description: 'Hành trình trải nghiệm kéo dài 02 tuần.' }
        ],
        highlights: [
            {
                title: 'Trải nghiệm thực tế',
                description: 'Ghé thăm 08 doanh nghiệp tiêu biểu trong lĩnh vực công nghệ, du lịch và nông nghiệp công nghệ cao.',
                icon: 'compass'
            },
            {
                title: 'Mentor đồng hành',
                description: 'Mentor là các nhà quản lý nhân sự, trưởng bộ phận sẽ hỗ trợ định hướng nghề nghiệp.',
                icon: 'handshake'
            },
            {
                title: 'Học bổng & thực tập',
                description: 'Cơ hội nhận học bổng kỹ năng và suất thực tập ngay sau chương trình.',
                icon: 'award'
            }
        ],
        metrics: [
            { label: 'Doanh nghiệp tham gia', value: '8 đơn vị' },
            { label: 'Mentor đồng hành', value: '20 chuyên gia' },
            { label: 'Học bổng', value: '30 suất học bổng kỹ năng' }
        ],
        schedule: [],
        speakers: [],
        partners: [
            { name: 'Sở Lao động - Thương binh và Xã hội Kon Tum', tier: 'Đối tác đồng hành' },
            { name: 'KontumPlus', tier: 'Đơn vị tổ chức' }
        ],
        faqs: [
            {
                question: 'Chương trình phù hợp với ai?',
                answer: 'Sinh viên năm cuối, đặc biệt là các bạn đang tìm kiếm cơ hội thực tập và việc làm tại Kon Tum.'
            }
        ],
        resources: {
            supportEmail: 'explore@kontumplus.net',
            hotline: '+84 978 456 789',
            facebookGroup: 'https://www.facebook.com/groups/explore.kontum'
        }
    }
];

export function findEventByCode(code) {
    return events.find((event) => event.code.toLowerCase() === code.toLowerCase());
}
