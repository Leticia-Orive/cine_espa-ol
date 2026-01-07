import * as funcionModel from '../models/funcionModel.js';

export const getFunciones = async (req, res) => {
  try {
    const funciones = await funcionModel.getAllFunciones();
    res.json(funciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getFuncion = async (req, res) => {
  try {
    const funcion = await funcionModel.getFuncionById(req.params.id);
    if (!funcion) {
      return res.status(404).json({ error: 'Función no encontrada' });
    }
    res.json(funcion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getFuncionesByPelicula = async (req, res) => {
  try {
    const funciones = await funcionModel.getFuncionesByPelicula(req.params.peliculaId);
    res.json(funciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createFuncion = async (req, res) => {
  try {
    const id = await funcionModel.createFuncion(req.body);
    res.status(201).json({ id, message: 'Función creada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateFuncion = async (req, res) => {
  try {
    const affectedRows = await funcionModel.updateFuncion(req.params.id, req.body);
    if (affectedRows === 0) {
      return res.status(404).json({ error: 'Función no encontrada' });
    }
    res.json({ message: 'Función actualizada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteFuncion = async (req, res) => {
  try {
    const affectedRows = await funcionModel.deleteFuncion(req.params.id);
    if (affectedRows === 0) {
      return res.status(404).json({ error: 'Función no encontrada' });
    }
    res.json({ message: 'Función eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
