import express from 'express';
import * as peliculaController from '../controllers/peliculaController.js';

const router = express.Router();

router.get('/', peliculaController.getPeliculas);
router.get('/:id', peliculaController.getPelicula);
router.post('/', peliculaController.createPelicula);
router.put('/:id', peliculaController.updatePelicula);
router.delete('/:id', peliculaController.deletePelicula);

export default router;
