const {Router}= require('express');
const bookRouter= Router();

const bookController= require('../controllers/book_controller');

//................. get courses............................
bookRouter.get('/', bookController.getAllBooks);
bookRouter.get('/:id', bookController.getBookByID);
//................... Post.........................................
bookRouter.post('/', bookController.addBook);
//.................. Put .......................
bookRouter.put('/:id', bookController.editBook);
//............... Delete.....................
bookRouter.delete('/:id', bookController.deleteBook);

module.exports={bookRouter,};