const express = require("express");
const router = express.Router();
const organizersController = require("../controller/organizersController.js");

router.delete("/", organizersController.removeAllorganizers);

router.post("/populateorganizerss", organizersController.populateorganizers);

router.get("/GetWholeTable", organizersController.GetWholeTable);

router.get("/getorganizerswithCondition", organizersController.getorganizerswithCondition);

router.post("/AddNeworganizers",organizersController.AddNeworganizers);

router.put("/Updateorganizers",organizersController.Updateorganizers);

router.delete("/DeleteorganizersAtID",organizersController.DeleteorganizersAtID);

router.delete("/DeleteorganizersAtID",organizersController.DeleteorganizersWithCondition);


module.exports = router;