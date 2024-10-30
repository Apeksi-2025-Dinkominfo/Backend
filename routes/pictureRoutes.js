import express from 'express';

import { upload } from '../middlewares/fileUpload.js';
import { createPicture, deletePicture, getPicture } from '../controllers/pictureController.js';
const router = express.Router();

router.get('/gambar', getPicture);
router.post('/gambar', upload.single('url'),createPicture);
router.delete('/gambar', deletePicture);

export default router;
