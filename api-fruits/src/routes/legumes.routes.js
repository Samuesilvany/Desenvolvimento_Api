import express from 'express'
import { legumesService } from '../services/legumes.service.js'

export const legumesRoute = express.Router()

legumesRoute.get("/", async (req, res) => {
    const legumes = await legumesService.getAll()
    res.json(legumes)
})

legumesRoute.get("/:id", async (req, res) => {
    const { id } = req.params
    const legume = await legumesService.getById(id)
    res.json(legume)
})

legumesRoute.post("/", async (req, res) => {
    const { nome, preco, quantidade } = req.body
    const legume = await legumesService.create({ nome, preco, quantidade })
    res.json(legume)
})

legumesRoute.put("/:id", async (req, res) => {
    const { id } = req.params
    const { nome, preco, quantidade } = req.body
    const legume = await legumesService.update(id, { nome, preco, quantidade })
    res.json(legume)
})

legumesRoute.delete("/:id", async (req, res) => {
    const { id } = req.params
    const legume = await legumesService.delete(id)
    res.json(legume)
})

