import { pool } from "../config/db.js"

class LegumesService {
    async getAll() {
        try {
            const res = await pool.query("SELECT * FROM public.legumes")

            return res.rows
        } catch (error) {
            console.error(error)
        }
    }

    async getById(id) {
        try {
            const res = await pool.query('SELECT * FROM legumes WHERE id = $1', [id])
            console.log(res);

            return res.rows
        } catch (error) {
            console.error(error);
        }
    }

}

export const legumesService = new LegumesService()