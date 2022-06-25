const router = require("express").Router()
const postController = require("../controllers/user.controller")

router.get("/", postController.home)
router.get("/single/:id",postController.single)
router.get("/add", postController.add)
router.post("/add", postController.addLogic)
router.get("/edit/:id",postController.edit)
router.post("/edit/:id",postController.editLogic)
router.get("/delete/:id", postController.delItem)
router.get("/status/:id", postController.status)

module.exports = router