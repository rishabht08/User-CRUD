const express = require("express");
const router = express.Router();
const db = require("../database")
const User  = require("../models/user")
const userWrite = require("../controllers/usersWrite")
const userRead = require("../controllers/usersRead")
const checkCache = require("../middleware/cache")

//Writing Users
router.post("/create" , userWrite.createUser)
router.patch("/update/:id" , userWrite.updateUser)
router.delete("/delete/:id" , userWrite.deleteUser)


//Reading Users
router.get("/get" , checkCache , userRead.getAllUser)
router.get("/get/from" , userRead.findFromQuery )






module.exports = router