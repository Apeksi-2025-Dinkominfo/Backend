import express from 'express';
import {
    getPendaftar,
    getPendaftarById,
    createPendaftar,
    updatePendaftar,
    deletePendaftar,
} from '../controllers/optdController.js';
const router = express.Router();

router.get('/optd', getPendaftar);
router.get('/optd/:id', getPendaftarById);
router.post('/optd',  createPendaftar);
router.patch('/optd/:id',updatePendaftar);
router.delete('/optd/:id', deletePendaftar);

export default router;
