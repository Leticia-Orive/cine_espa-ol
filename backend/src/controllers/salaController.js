import * as salaModel from '../models/salaModel.js';

export const getSalas = async (req, res) => {
  try {
    const salas = await salaModel.getAllSalas();
    res.json(salas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSala = async (req, res) => {
  try {
    const sala = await salaModel.getSalaById(req.params.id);
    if (!sala) {
      return res.status(404).json({ error: 'Sala no encontrada' });
    }
    res.json(sala);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createSala = async (req, res) => {
  try {
    const id = await salaModel.createSala(req.body);
    res.status(201).json({ id, message: 'Sala creada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateSala = async (req, res) => {
  try {
    const affectedRows = await salaModel.updateSala(req.params.id, req.body);
    if (affectedRows === 0) {
      return res.status(404).json({ error: 'Sala no encontrada' });
    }
    res.json({ message: 'Sala actualizada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteSala = async (req, res) => {
  try {
    const affectedRows = await salaModel.deleteSala(req.params.id);
    if (affectedRows === 0) {
      return res.status(404).json({ error: 'Sala no encontrada' });
    }
    res.json({ message: 'Sala eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
