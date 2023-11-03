const express = require("express");
const router = express.Router();
const locationsController = require("../controller/locationsController.js");

router.delete("/", locationsController.removeAlllocations);

router.post("/populatelocations", locationsController.populatelocations);

router.get("/GetWholeTable", locationsController.GetWholeTable);

router.get("/getlocationswithCondition", locationsController.getlocationswithCondition);

router.post("/AddNewlocation",locationsController.AddNewlocations);

router.put("/Updatelocations",locationsController.Updatelocations);

router.delete("/DeletelocationsAtID",locationsController.DeletelocationsAtID);

router.delete("/DeletelocationswithCondition",locationsController.DeletelocationsWithCondition);


module.exports = router;
