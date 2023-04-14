const {Router}= require('express');
const bookRouter= Router();

const bookController= require('../controllers/book_controller');


bookRouter.get('/', bookController.getAllBooks);
bookRouter.get('/:id', bookController.getBookByID);
bookRouter.post('/', bookController.addBook);
bookRouter.put('/:id', bookController.editBook);
bookRouter.delete('/:id', bookController.deleteBook);

module.exports={bookRouter,};