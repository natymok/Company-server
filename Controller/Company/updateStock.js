const stock = require("../../Model/Stock");
exports.editStock = (req, res) => {
  const info = {
    stockName: req.body.stockName,
    Description: req.body.Description,
    amount: req.body.amount,
    price: req.body.price,
    companyName: req.body.companyName,
  };

  stock
    .findOneAndUpdate(
      { companyName: req.body.companyName },
      { ...info },
      { new: true }
    )
    .then((data) => {
      if (data) {
        res.status(200).json({
          message: "update succesfull",
        });
      } else {
        res.status(400).json({
          error: "something went wrong",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
};
