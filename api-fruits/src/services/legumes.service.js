import { pool } from "../config/db.js"

class LegumesService {
    async getAll() {
        const res = await pool.query("SELECT * FROM public.legumes")
        return res.rows
    }

    async getById(id) {
        const res = await pool.query("SELECT * FROM public.legumes WHERE id = $1", [id])
        return res.rows
    }

    async create({ nome, preco, quantidade }) {
        const res = await pool.query(
            "INSERT INTO public.legumes (nome, preco, quantidade) VALUES ($1, $2, $3) RETURNING *",
            [nome, preco, quantidade]
        )
        return res.rows[0]
    }

    async update(id, { nome, preco, quantidade }) {
        const res = await pool.query(
            "UPDATE public.legumes SET nome = $1, preco = $2, quantidade = $3 WHERE id = $4 RETURNING *",
            [nome, preco, quantidade, id]
        )
        return res.rows[0]
    }

    async delete(id) {
        const res = await pool.query("DELETE FROM public.legumes WHERE id = $1 RETURNING *", [id])
        return res.rows[0]
    }
}

export const legumesService = new LegumesService()

