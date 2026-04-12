import { defineConfig } from '@prisma/config'

export default defineConfig({
  datasource: {
    // Prisma 7 sẽ lấy URL từ biến môi trường thông qua cấu hình này
    url: process.env.DATABASE_URL,
  },
})