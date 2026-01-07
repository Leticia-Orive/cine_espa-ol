import express from 'express';
import * as salaController from '../controllers/salaController.js';

const router = express.Router();

router.get('/', salaController.getSalas);
router.get('/:id', salaController.getSala);
router.post('/', salaController.createSala);
router.put('/:id', salaController.updateSala);
router.delete('/:id', salaController.deleteSala);

export default router;
