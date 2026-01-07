import * as reservaModel from '../models/reservaModel.js';

export const getReservas = async (req, res) => {
  try {
    const reservas = await reservaModel.getAllReservas();
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getReserva = async (req, res) => {
  try {
    const reserva = await reservaModel.getReservaById(req.params.id);
    if (!reserva) {
      return res.status(404).json({ error: 'Reserva no encontrada' });
    }
    res.json(reserva);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createReserva = async (req, res) => {
  try {
    const id = await reservaModel.createReserva(req.body);
    res.status(201).json({ id, message: 'Reserva creada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteReserva = async (req, res) => {
  try {
    const affectedRows = await reservaModel.deleteReserva(req.params.id);
    if (affectedRows === 0) {
      return res.status(404).json({ error: 'Reserva no encontrada' });
    }
    res.json({ message: 'Reserva eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAsientosOcupados = async (req, res) => {
  try {
    const asientos = await reservaModel.getAsientosOcupados(req.params.funcionId);
    const ocupados = asientos.flatMap(r => r.asientos.split(','));
    res.json(ocupados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
