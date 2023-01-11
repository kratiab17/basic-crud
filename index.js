const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require("./models/config")
const userRoute = require("./routers/userRouter")

const port = 5000
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())






app.use("/",userRoute)
app.listen(port,()=>{
    console.log(`server is working on port : ${port}`);
})




