var express=require('express')
var router=express.Router();
const { check } = require('express-validator');

const {signout,signup} = require("../controllers/auth")
router.get("/signout",signout);

router.post("/signup",[
    check("name","name should be atleast 3 characters").isLength({min: 3}),
    check("email","required").isEmail(),
    check("password","password should be atleast 3 chars").isLength({min: 3})
],signup);
module.exports=router;
