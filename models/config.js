const mongoose = require('mongoose')


mongoose.set("strictQuery",false);

mongoose.connect("mongodb://127.0.0.1:27017/crud_db",{
    useNewUrlParser : "true",
});
mongoose.connection.on("error",(err)=>{
    console.log("mongoose connection error",err);
});
mongoose.connection.on("connected",(err,res)=>{
    console.log("mongoose connected");
});
