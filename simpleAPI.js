const {app}= require('./app');

const mongoose= require("mongoose");

//.................. port.....................
const port= process.env.PORT || 3000;
app.listen(port, async ()=>{
    await mongoose.connect("mongodb+srv://nada:nada@cluster0.ejel1pl.mongodb.net/test"); 
    console.log(`Listening on port ${port}`)}
     );