const Joi= require('joi');

function validationBook(book){
    const schema= Joi.object({
        name: Joi.string().min(3).required(),
        price: Joi.number().min(1).required(),
        author:Joi.string().min(5).required(),
    });

    return schema.validate(book);
}

module.exports={
    validationBook,
}