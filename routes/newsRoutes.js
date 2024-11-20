import express from 'express';
import {
  getNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews,
} from '../controllers/newsController.js';
import { uploadSingle } from '../middlewares/fileUpload.js';

const router = express.Router();

router.get('/news', getNews);
router.get('/news/:id', getNewsById);
router.post('/news', uploadSingle, createNews); // Upload satu file
router.patch('/news/:id', uploadSingle, updateNews); // Upload satu file
router.delete('/news/:id', deleteNews);

export default router;
