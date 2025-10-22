# KontumPlus Experience Platform

Một nền tảng full-stack nhẹ giúp mô phỏng trang sự kiện Future Challenge của KontumPlus. Ứng dụng gồm backend Node.js/Express quản lý dữ liệu sự kiện và tiếp nhận đăng ký, đồng thời cung cấp frontend hiện đại, tối ưu cho trải nghiệm người dùng.

## Tính năng chính

- ✨ **Trang giới thiệu chuyên nghiệp**: Hero động, điểm nhấn chương trình, timeline, lịch trình, mentor, đối tác và FAQ.
- 🧠 **API sự kiện**: Endpoint truy xuất danh sách sự kiện và chi tiết theo mã `code` (ví dụ `TENTEST`).
- 📝 **Đăng ký tham dự**: Form frontend gửi dữ liệu đến backend, lưu trữ tạm và trả về thống kê số suất còn lại.
- 🤝 **Liên hệ nhanh**: Form liên hệ gửi yêu cầu tư vấn tới backend.
- 🎨 **Tùy biến thương hiệu**: Giao diện sử dụng CSS variable, dễ dàng áp dụng màu sắc mới cho từng sự kiện.

## Cài đặt

1. Cài đặt Node.js (v18 trở lên khuyến nghị).
2. Cài dependencies:

```bash
npm install
```

3. Tạo file `.env` từ mẫu:

```bash
cp .env.example .env
```

Sau đó cập nhật `PORT` nếu cần.

## Chạy dự án

- Chạy server phát triển (tự động reload khi có thay đổi):

```bash
npm run dev
```

- Chạy server ở chế độ production:

```bash
npm start
```

Ứng dụng lắng nghe tại `http://localhost:3000` (hoặc theo `PORT` cấu hình). Truy cập `/?code=TENTEST` hoặc `/e?code=TENTEST` để xem trang Future Challenge.

## Cấu trúc thư mục

```
├── public/              # Frontend tĩnh (HTML/CSS/JS)
├── src/
│   ├── data/            # Dữ liệu sự kiện mẫu
│   ├── middleware/      # Middleware xử lý lỗi chung
│   ├── routes/          # Định nghĩa API Express
│   ├── services/        # Business logic (sự kiện, đăng ký, liên hệ)
│   ├── utils/           # Tiện ích dùng chung
│   └── validators/      # Hàm kiểm tra dữ liệu gửi lên
└── README.md
```

## API Reference

| Phương thức | Endpoint                        | Mô tả                                  |
|-------------|----------------------------------|----------------------------------------|
| `GET`       | `/api/events`                    | Danh sách rút gọn các sự kiện          |
| `GET`       | `/api/events/:code`              | Chi tiết sự kiện theo mã               |
| `POST`      | `/api/events/:code/register`     | Gửi đăng ký tham gia sự kiện           |
| `POST`      | `/api/contact`                   | Gửi yêu cầu liên hệ tới ban tổ chức    |

Dữ liệu đăng ký và liên hệ được lưu trong bộ nhớ (in-memory store) phục vụ demo. Tích hợp cơ sở dữ liệu thực tế có thể thực hiện tại `src/services/registrationService.js` và `src/services/contactService.js`.

## Tuỳ biến

- Cập nhật nội dung sự kiện tại `src/data/events.js`.
- Điều chỉnh quy tắc validation form trong `src/validators`.
- Tùy biến giao diện bằng cách chỉnh sửa `public/styles.css` hoặc mở rộng `public/app.js`.

## Giấy phép

Dự án tuân theo giấy phép [MIT](LICENSE).
