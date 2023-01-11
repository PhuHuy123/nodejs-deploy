const { Author, Article } = require("../model/model");
const authorController = {
  //ADD AUTHOR
  addAuthor: async (req, res) => {
    try {
      const newAuthor = new Author(req.body);
      const savedAuthor = await newAuthor.save();
      res.json({
        status: 200,
        data: savedAuthor,
        message: "Tạo mới thành công",
      });
    } catch (err) {
      res.status(500).json(err); //HTTP REQUEST CODE
    }
  },

//   //GET ALL AUTHORS
  getAllAuthors: async (req, res) => {
    try {
      const authors = await Author.find();
      res.json({
        status: 200,
        data: authors
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },

//   //GET AN AUTHOR
  getAnAuthor: async (req, res) => {
    try {
      const author = await Author.findById(req.params.id).populate("articles");
      res.status(200).json(author);
    } catch (err) {
      res.status(500).json(err);
    }
  },

//   //UPDATE AUTHOR
  updateAuthor: async (req, res) => {
    try {
      const author = await Author.findById(req.params.id);
      await author.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

//   //DELETE AUTHOR
  deleteAuthor: async (req, res) => {
    try {
      await Article.updateMany({ author: req.params.id }, { author: null });
      await Author.findByIdAndDelete(req.params.id);
      res.json({
        status: 200,
        message: "Deleted successfully",
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = authorController;
