const articleController = require("../controllers/articleController");
const fileUploader = require('../configs/cloudinary.config');

const router = require("express").Router();

//ADD A POST
router.post("/", fileUploader.single('image'), articleController.addAArticle);

//GET ALL POSTS
router.get("/", articleController.getAllArticles);

//GET A POST
router.get("/:id", articleController.getAArticle);

//UPDATE A POST
router.put("/:id", articleController.updateArticle);

//DELETE A POST
router.delete("/:id", articleController.deleteArticle);

module.exports = router;