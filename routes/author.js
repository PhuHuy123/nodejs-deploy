const authorController = require("../controllers/authorController");
const { Article, Author } = require("../model/model");

const router = require("express").Router();

//ADD AUTHOR
router.post("/", authorController.addAuthor);

//GET ALL AUTHORS
router.get("/", async (req, res) => {
    try {
      const allArticles = await Author.find();
      res.json({
        status: 200,
        data: allArticles,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// //GET AN AUTHOR
router.get("/:id", authorController.getAnAuthor);

// //UPDATE AN AUTHOR
router.put("/:id", authorController.updateAuthor);

// //DELETE AUTHOR
router.delete("/:id", authorController.deleteAuthor);

module.exports = router;