const { Article, Author } = require("../model/model");

const articleController = {
  //ADD A POST
  addAArticle: async (req, res) => {
    try {
      if(req.file?.fieldname === 'image'){
        req.body.image = req.file?.path
      }
      const newArticle = new Article(req.body);
      const savedArticle = await newArticle.save();
      if (req.body.author) {
        const author = Author.findById(req.body.author);
        await author.updateOne({ $push: { articles: savedArticle._id } });
      }
      res.json({
        status: 200,
        data: savedArticle,
        message: "Tạo mới thành công",
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //GET ALL POSTS
  getAllArticles: async (req, res) => {
    try {
      const allArticles = await Article.find();
      res.json({
        status: 200,
        data: allArticles,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET A POST
  getAArticle: async (req, res) => {
    try {
      const article = await Article.findById(req.params.id).populate("author");
      res.status(200).json(article);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE POST
  updateArticle: async (req, res) => {
    try {
      const article = await Article.findById(req.params.id);
      await article.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE POST
  deleteArticle: async (req, res) => {
    try {
      await Author.updateMany(
        { articles: req.params.id },
        { $pull: { articles: req.params.id } }
      );
      await Article.findByIdAndDelete(req.params.id);
      res.json({
        status: 200,
        message: "Deleted successfully",
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = articleController;