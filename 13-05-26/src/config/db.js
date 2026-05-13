import { Pool } from 'pg'
const res = await pool.query('SELECT * FROM legumes', ['Hello world!'])
console.log(res.rows[0].message);

dotenv.config();
const { Pool } = pg;

const pool = new Pool({
    database: process.env.DB_NAME,
    password: process.env.DB_NAME_PASSWORD,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
});
