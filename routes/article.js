const articleController = require("../controllers/articleController");

const router = require("express").Router();

//ADD A POST
router.post("/", articleController.addAArticle);

//GET ALL POSTS
router.get("/", articleController.getAllArticles);

//GET A POST
router.get("/:id", articleController.getAArticle);

//UPDATE A POST
router.put("/:id", articleController.updateArticle);

//DELETE A POST
router.delete("/:id", articleController.deleteArticle);

module.exports = router;