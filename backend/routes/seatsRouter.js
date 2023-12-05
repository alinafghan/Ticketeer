const express = require("express");
const router = express.Router();
const seatsController = require("../controller/seatsController.js");

router.delete("/", seatsController.removeAllseats);

router.post("/populateseatss", seatsController.populateseats);

router.get("/GetWholeTable", seatsController.GetWholeTable);

router.get("/getseatswithCondition", seatsController.getseatswithCondition);

router.post("/AddNewseats", seatsController.AddNewseats);

router.put("/Updateseats", seatsController.Updateseats);

router.delete("/DeleteseatsAtID", seatsController.DeleteseatsAtID);

router.delete("/DeleteseatsAtID", seatsController.DeleteseatsWithCondition);

module.exports = router;
