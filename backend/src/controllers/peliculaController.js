import * as peliculaModel from '../models/peliculaModel.js';

export const getPeliculas = async (req, res) => {
  try {
    const peliculas = await peliculaModel.getAllPeliculas();
    res.json(peliculas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPelicula = async (req, res) => {
  try {
    const pelicula = await peliculaModel.getPeliculaById(req.params.id);
    if (!pelicula) {
      return res.status(404).json({ error: 'Película no encontrada' });
    }
    res.json(pelicula);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createPelicula = async (req, res) => {
  try {
    const id = await peliculaModel.createPelicula(req.body);
    res.status(201).json({ id, message: 'Película creada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePelicula = async (req, res) => {
  try {
    const affectedRows = await peliculaModel.updatePelicula(req.params.id, req.body);
    if (affectedRows === 0) {
      return res.status(404).json({ error: 'Película no encontrada' });
    }
    res.json({ message: 'Película actualizada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePelicula = async (req, res) => {
  try {
    const affectedRows = await peliculaModel.deletePelicula(req.params.id);
    if (affectedRows === 0) {
      return res.status(404).json({ error: 'Película no encontrada' });
    }
    res.json({ message: 'Película eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
