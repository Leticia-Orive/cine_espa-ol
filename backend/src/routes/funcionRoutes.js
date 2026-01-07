import express from 'express';
import * as funcionController from '../controllers/funcionController.js';

const router = express.Router();

router.get('/', funcionController.getFunciones);
router.get('/:id', funcionController.getFuncion);
router.get('/pelicula/:peliculaId', funcionController.getFuncionesByPelicula);
router.post('/', funcionController.createFuncion);
router.put('/:id', funcionController.updateFuncion);
router.delete('/:id', funcionController.deleteFuncion);

export default router;
