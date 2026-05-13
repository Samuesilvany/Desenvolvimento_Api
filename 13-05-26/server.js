import express from 'express';
import legumesRoutes from './src/routes/legumesRoutes'
require('dotenv').config()

const app = express ()
const port = 3000

app.use(express.json())


app.use("/legumes", legumesRoutes)

app.listen(port, () => {
    console.log(`O servidor está rodando na porta 3000`)
});

console.log(`Hello ${process.env.HELLO}`)

dotenv.config();
const{Pool} = pg;

const pool = new pool({
    database: process.env.DB_NAME,
    password: process.env.DB_NAME_PASSWORD,
    user: process.env.DBUSER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
});