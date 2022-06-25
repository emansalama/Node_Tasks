const router=require("express").Router()
const postcontroller=require("../controller/post.controller")
router.get("/",postcontroller.home)
router.get("/add",postcontroller.add)
router.get("/edit",postcontroller.edit)
router.get("/single",postcontroller.single)
module.exports=router