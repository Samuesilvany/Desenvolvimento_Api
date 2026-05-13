import { Pool } from 'pg'
import 'dotenv/config'

const { Pool: PgPool } = await import('pg')

export const pool = new PgPool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  port: process.env.DB_PORT
})

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err)
})

