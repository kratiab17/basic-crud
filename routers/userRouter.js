const express = require('express')
const router = express.Router()
const userController = require("../controllers/userController")

router.get("/get_user",userController.getUser)
router.get("/get_user1/:id",userController.getUser1)
router.post("/create_user",userController.createUser)
router.patch("/update_user/:id",userController.updateUser)
router.delete("/delete_user/:id",userController.deleteUser)
module.exports = router