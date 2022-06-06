import express from 'express';
import { getBooks, postBook, deleteBook } from '../controllers/books.js';

const router = express.Router();

router.get("/", getBooks)
router.post("/", postBook);
router.delete("/:id", deleteBook);

export default router;
