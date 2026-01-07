import express from 'express';
import * as reservaController from '../controllers/reservaController.js';

const router = express.Router();

router.get('/', reservaController.getReservas);
router.get('/:id', reservaController.getReserva);
router.get('/asientos/:funcionId', reservaController.getAsientosOcupados);
router.post('/', reservaController.createReserva);
router.delete('/:id', reservaController.deleteReserva);

export default router;
