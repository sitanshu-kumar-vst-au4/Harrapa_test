const Transporation = require("../../Model/Transporation");
const TransporationController = {};
TransporationController.create = function (req, res) {
    Transporation.create(
    {
        VechileType: req.body.VechileType,
        VechileNumber: req.body.VechileNumber,
        DriverName: req.body.DriverName,
        AmounttoPaid: req.body.AmounttoPaid,
    
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


module.exports = TransporationController;
