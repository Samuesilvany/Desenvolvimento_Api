import express from 'express'
import { legumesServices } from '../services/legumes.services.js'

const route = express.Router()

route.get("/", (req, res) => {
    const data = legumesServices.getAll()
    res.json(data)
})

route.get("/:id", (req, res) => {
    const { id } = req.params
    const legumes = legumesServices.getById(id)
    if (!Legumes) {
        return res.status(404).json({ message: "Legume não encontrado" })
    }

    res.json(legumes)

})

export default route