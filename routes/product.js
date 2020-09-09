const express=require("express");
const router=express.Router;

const { getProductById,createProduct}=require("../controllers/product");
const {isSignedIn,isAuthenticated,isAdmin }=require("../controllers/user");
const {getUserById }=require("../controllers/auth");

router.param("userId",getUserById);
router.param("productId",getProductById);

router.post("/product/create/:userId",isAdmin,isAuthenticated,isSignedIn,createProduct);





module.exports=router;