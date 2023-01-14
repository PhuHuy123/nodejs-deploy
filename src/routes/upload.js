const router = require("express").Router();
const fileUploader = require('../configs/cloudinary.config');

router.post('/', fileUploader.single('image'), (req, res, next) => {
    console.log("ok");
  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }
 
  res.json({ secure_url: req.file.path });
});

module.exports = router;