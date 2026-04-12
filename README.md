# EduSmart - Microservices Backend System

Hệ thống Backend của EduSmart được thiết kế theo kiến trúc Microservices để đảm bảo tính mở rộng, độc lập và hiệu suất cao.

## 🏗 Kiến trúc hệ thống (System Architecture)
Dự án được tổ chức theo mô hình **Monorepo** bao gồm các dịch vụ:
- **API Gateway:** Cổng tiếp nhận duy nhất, điều hướng request đến các service.
- **Course Service:** Quản lý khóa học, chương mục và bài giảng (Node.js, Prisma).
- **Progress Service:** Theo dõi tiến độ học tập của người dùng.
- **AI Tutor Service:** Tích hợp **Groq API** để xử lý câu hỏi dựa trên ngữ cảnh bài học.
- **Certificate Service:** Tự động tạo chứng chỉ PDF khi hoàn thành khóa học.

## 🛠 Công nghệ sử dụng
- **Runtime:** Node.js (Express.js)
- **Database:** PostgreSQL (Mỗi service sử dụng database riêng)
- **ORM:** Prisma
- **AI:** Groq SDK (LLM integration)
- **Communication:** RESTful API & RabbitMQ (Message Broker)
- **DevOps:** Docker, Docker Compose

## 🚀 Cài đặt với Docker

Đây là cách nhanh nhất để khởi chạy toàn bộ hệ thống (bao gồm các Service và PostgreSQL):

1. Clone repository:
   ```Bash
   git clone [https://github.com/qvinh0402/edusmart-backend.git](https://github.com/qvinh0402/edusmart-backend.git)

2. Cấu hình biến môi trường:
   Sao chép các file .env.example thành .env trong từng thư mục service và điền các API Key (Groq API, Database URL).

3. Chạy hệ thống bằng Docker Compose:
   ```Bash
   docker-compose up -d
