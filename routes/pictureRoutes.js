import express from 'express';

import { uploadMultiple } from '../middlewares/fileUpload.js';
import { createPicture, deletePicture, getPicture } from '../controllers/pictureController.js';
const router = express.Router();

router.get('/gambar', getPicture);
router.post('/gambar', uploadMultiple,createPicture);
router.delete('/gambar', deletePicture);

export default router;
