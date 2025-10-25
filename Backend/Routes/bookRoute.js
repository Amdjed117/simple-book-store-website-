import express from "express";
import {Book} from "../Models/bookModel.js";
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        if(!req.body.title||!req.body.author||!req.body.publishYear){
            res.status(400).send({ message:  'Send all required fields: title, author, publishYear' });
        }
        const newBook = req.body;
        const book = await Book.create(newBook);
        res.status(201).send(book);
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        
        const books = await Book.find({});
        res.status(200).json({
            count : books.length,
            data : books});
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const book = await Book.findById(id);
        if(!book){
            res.status(400).send({message:"book not found"});
        }
        res.status(200).send(book);
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const book = await Book.findByIdAndDelete(id);
        if(!book){
            res.status(400).send({message:"book not found"});
        }
        res.status(200).send({message:"book deleted successfully"});
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message });
    }
});

router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }

    const { id } = request.params;

    const result = await Book.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).send({ message: 'Book updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router ;