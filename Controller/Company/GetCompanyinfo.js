const stock = require("../../Model/Stock");
exports.getCompanyinfo = (req, res) => {
  console.log(req.params.name, "bbbbbbbbbb");
  stock
    .findOne({ companyName: req.params.name })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
