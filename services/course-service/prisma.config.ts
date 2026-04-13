import { defineConfig } from '@prisma/config'
import * as dotenv from 'dotenv'

// Nạp các biến từ file .env vào process.env
dotenv.config()

export default defineConfig({
  datasource: {
    // Bây giờ process.env.DATABASE_URL sẽ có giá trị
    url: process.env.DATABASE_URL,
  },
})