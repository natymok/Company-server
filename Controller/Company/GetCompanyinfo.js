const stock = require("../../Model/Stock");
exports.getCompanyinfo = (req, res) => {
  console.log(req.params.name, "bbbbbbbbbb");
  stock
    .findOne({ companyName: req.params.name })
    .then((data) => {
      res.status(200).json({
        message: data,
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
};
