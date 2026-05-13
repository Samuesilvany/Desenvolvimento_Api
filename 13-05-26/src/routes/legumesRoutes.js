import express from 'express';
import { legumesServices } from '../services/legumesServices.js';

const legumesRoute = express.Router();

legumesRoute.get('/', async (req, res) => {
  try {
    const legumes = await legumesServices.getAll();
    res.json(legumes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao listar legumes' });
  }
});

legumesRoute.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const legume = await legumesServices.getById(id);

    if (!legume) {
      return res.status(404).json({ message: 'Legume não encontrado' });
    }

    res.json(legume);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar legume' });
  }
});

legumesRoute.post('/', async (req, res) => {
  try {
    const { nome, preco, quantidade } = req.body;
    const created = await legumesServices.create({ nome, preco, quantidade });
    res.status(201).json(created);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar legume' });
  }
});

legumesRoute.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, preco, quantidade } = req.body;
    const updated = await legumesServices.update(id, { nome, preco, quantidade });

    if (!updated) {
      return res.status(404).json({ message: 'Legume não encontrado' });
    }

    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar legume' });
  }
});

legumesRoute.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await legumesServices.delete(id);

    if (!deleted) {
      return res.status(404).json({ message: 'Legume não encontrado' });
    }

    res.json(deleted);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao deletar legume' });
  }
});

export default legumesRoute;

