const company = require("../../Model/Company");
const stock = require("../../Model/Stock");
exports.addStock = (req, res) => {
  const info = {
    stockName: req.body.stockName,
    Description: req.body.Description,
    amount: req.body.amount,
    price: req.body.price,
    companyName: req.body.companyName,
  };
  const _stock = new stock({
    ...info,
  });
  stock
    .findOne({ companyName: req.body.companyName })
    .then((data) => {
      if (data) {
        res.status(400).json({
          error: "you have already added stock  you can edit",
        });
      } else {
        _stock
          .save()
          .then((data) => {
            res.status(200).json({
              message: "sucessfully added stock",
            });
          })
          .catch((err) => {
            res.status(400).json({
              error: err,
            });
          });
      }
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
};
