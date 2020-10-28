

module.exports.upload = (req, res, next) => {
    if (!req.file) {
      next(new Error('No file uploaded!'))
      return
    }
    res.json({ secure_url: req.file.path })
}