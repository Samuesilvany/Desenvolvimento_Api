import express from 'express'
import fruitRoutes from './routes/fruitRoutes.js'
require('dotenv').config()

const app = express()
const port = 3000

app.use(express.json())


app.use("/fruits", fruitRoutes)

app.listen(port, () => {
    console.log(`O servidor está rodando em http://localhost:${port}`);

})

console.log ( ` Olá $ { process.env.HELLO } ` );

dotenv.config();
const { Pool } = pg;

const pool = new Pool({
    database: process.env.DB_NAME,
    password: process.env.DB_NAME_PASSWORD,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
});

