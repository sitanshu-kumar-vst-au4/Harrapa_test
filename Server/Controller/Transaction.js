const Transaction = require("../../Model/Transaction");
const TransactionController = {};
TransactionController.create = function (req, res) {
    Transaction.create(
    {
        Date: req.body.Date,
        FarmerName: req.body.FarmerName,
        Vegetabeles: req.body.Vegetabeles,
        Quantity: req.body.Quantity,
    
    },
    function (error, response) {
      if (error) {
        return res.send({
          status: false,
          message: "failed to create",
          error: error,
        });
      }
      return res.json({
        response,
      });
    }
  );
};


module.exports = TransactionController;
