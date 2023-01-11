const crudSchema = require("../models/crudModelSchema")
const getUser = async (req,resp)=>{
    try{
        console.log("GET REQUEST");
        const crud = await crudSchema.find();
        resp.json(crud);

    }
    catch(err)
    {
        resp.send("error:"+err);
    }
};
const createUser = async (req,resp)=>{
    const crudData = new crudSchema(req.body);
    // const crudData = new crudSchema({
    //     name :req.body.name,
    //     email : req.body.email,
    //     subject : req.body.subject
    // });
    try {
        const addRes = await crudData.save();
        resp.json({
            status : "successful",
            data : addRes
        });
    }
    catch(err){
        resp.send({
            status : "Failure",
            message : "Error occur " + err.message 
        });
    }
    
};
const updateUser = async (req,res)=>{
    console.log(req.params.id);
    try{
        const crud = await crudSchema.findByIdAndUpdate(req.params.id,req.body,{
            new : true,
            runValidators : true,
        });
        res.json(crud);
    }
    catch(err)
    {
        res.send("Error :"+err);
    }
};
const deleteUser = async (req,res)=>{
        await crudSchema.findByIdAndDelete(req.params.id);
        try
        {
            res.status(204).json({
                status : "Success",
                data : {},
            });
           
        }
        catch(err)
        {
            res.status(500).json({
                status : "Failed",
                message : err,
            });
        }
    };
const getUser1 = async (req,resp)=>{
    try{
        console.log("GET REQUEST");
        const crud = await crudSchema.findById(req.params.id);
        resp.json(crud);

    }
    catch(err)
    {
        resp.send("error:"+err);
    }
};
module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser,
    getUser1
}
