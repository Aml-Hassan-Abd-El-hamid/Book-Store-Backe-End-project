const Joi= require('joi');
const {books}= require('../modles/book');

const {validationBook}= require('../helpers/validation');

//................. get courses............................

const getAllBooks= (req, res)=>{
    res.send(books);
};

const getBookByID= (req, res)=>{
    const book =books.find(b=>b.id === parseInt(req.params.id));
    if(!book){
        res.status(404).send('The book with the given ID not found !')
    }
    else{
        res.send(book);
    }
};
//................... Post.........................................

const addBook=(req, res)=>{
    
    

    const result= validationBook(req.book);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        console.log(result);
        return;
    }

    const book={
        id: books[books.length-1].id +1,
        name: req.body.name,
        price: req.body.price,
        author:req.body.author
    };

    books.push(book);
    res.send(book);
};

//.................. Put .......................
const editBook=  (req, res)=>{
    const book= books.find( b=> b.id === parseInt(req.params.id));
    if(!book)
        res.status(400).send('The book with the given ID not found !');

    const result= validationBook(req.book);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        console.log(result);
        return;
    }    

    book.name= req.body.name;
    book.price=req.body.price;
    book.author= req.body.author;
    res.send(book);

};

//............... Delete.....................

const deleteBook= (req, res)=>{
    const book= books.find( b=> b.id === parseInt(req.params.id));
    if(!book)
        res.status(400).send('The book with the given ID not found !');

    const index= books.indexOf(book);
    books.splice(index, 1);

    res.send(book);
};
//...........................................
module.exports={
    getAllBooks,
    getBookByID,
    addBook,
    editBook,
    deleteBook,
};