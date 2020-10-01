const Farmer = require("../../Model/Farmer");
const FarmerController = {};
FarmerController.create = function (req, res) {
  Farmer.create(
    {
      Name: req.body.Name,
      villageName: req.body.villageName,
      age: req.body.age,
      gender: req.body.gender,
      phoneNumber: req.body.phoneNumber,
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


module.exports = FarmerController;
