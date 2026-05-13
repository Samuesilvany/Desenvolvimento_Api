import express from 'express'
import { legumesService } from '../services/legumes.service.js'

export const legumesRoute = express.Router()

legumesRoute.get("/", async (req, res) => {
    const legumes = await legumesService.getAll()

    res.json(legumes)
})

legumesRoute.get("/:id", async (req, res) => {
    const { id } = req.params
    console.log(id);

    const legume = await legumesService.getById(id)

    res.json(legume)
})