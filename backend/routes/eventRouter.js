const express = require("express");

const eventController = require("../controller/eventController");

const router = express.Router();

router.get("/GetWholeTable", eventController.GetWholeTable);
router.post("/populate", eventController.populateEvents);
router.delete("/deleteAll", eventController.removeAllEvents);
router.get("/getEventwithConditions", eventController.getEventwithCondition);
router.post("/addEvent", eventController.AddNewEvent);
router.put("/updateEvent", eventController.UpdateEvent);
router.delete("/deleteEvent", eventController.DeleteEventAtID);
router.get("/getIDfromname", eventController.FindIDfromEventname);

module.exports = router;
