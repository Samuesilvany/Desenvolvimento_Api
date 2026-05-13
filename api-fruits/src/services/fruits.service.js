import { pool } from "../config/db.js"

class FruitsService {
    async create(nome) {
        const fruits = await read()
        // const fruits = Array.isArray(data) ? data : [];

        try {
            const newFruit = {
                id: fruits.length > 0 ? fruits[fruits.length - 1].id + 1 : 1,
                nome
            }
            fruits.push(newFruit)
            await write(fruits)
            return newFruit
        } catch (error) {
            console.error(error);
        }
    }

    async getAll() {
        try {
            const fruits = await pool.query("SELECT * FROM frutas")
            return fruits.rows
        } catch (error) {
            console.error(error);
        }
    }
}


export const fruitsService = new FruitsService()