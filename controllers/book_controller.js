
const {Book}= require('../modles/book');



//................. get courses............................

const getAllBooks= async (req, res)=>{
    try{
        const allBooks= await Book.find({});
        res.status(200).send(allBooks);
    }
    catch(error){
        res.status(400).send(error);
    }
};

const getBookByID= async (req, res)=>{
    try{
        const book= await Book.findOne({_id: req.params.id});
        res.status(200).send(book);
    }catch(error){
        res.status(400).send(error);
    }
};
//................... Post.........................................

const addBook=async (req, res)=>{
    
    try{
        const book= await Book.create(req.body);
        res.status(200).send(book);
    }catch(error){
        res.status(400).send(error);
    }
};

//.................. Put .......................
const editBook=  async (req, res)=>{
    try{
        const book= await Book.findOne({_id: req.params.id});
        if(!book){
            return res.status(404).send("Book not found");
        }
        if(req.body.name){
            book.name= req.body.name;       
        }
         if(req.body.count){
            book.count= req.body.count;       
        } 
        await book.save();
        res.status(200).send(book);
    
    }catch(error){
        res.status(400),send(error);
    } 

};

//............... Delete.....................

const deleteBook= async (req, res)=>{
    try{
        const book= await Book.deleteOne({_id: req.params.id});
        await Book.deleteOne({_id: req.params.id});
        res.status(200).send(book);
       }
       catch(error){
        res.status(400).send(error);
       }
};
//...........................................
module.exports={
    getAllBooks,
    getBookByID,
    addBook,
    editBook,
    deleteBook,
};