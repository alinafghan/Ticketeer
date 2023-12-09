const express = require("express");

const eventController = require("../controller/eventController");

const router = express.Router();

router.get("/GetWholeTable", eventController.GetWholeTable);
router.delete("/deleteAll", eventController.removeAllEvents);
router.get("/getEventwithCondition", eventController.getEventwithCondition);
router.post("/addEvent", eventController.AddNewEvent);
router.put("/updateEvent", eventController.UpdateEvent);
router.delete("/deleteEvent", eventController.DeleteEventAtID);
router.get("/getIDfromname", eventController.FindIDfromEventname);
router.get("/findEventfromID", eventController.FindEventfromID);
router.get("/filterby", eventController.SortEvents);

module.exports = router;
