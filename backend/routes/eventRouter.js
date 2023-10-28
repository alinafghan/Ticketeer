const express = require("express");
const router = express.Router();
const eventController = require("../controller/eventController.js");

router.delete("/", eventController.removeAllEvents);

router.post("/populateEvents", eventController.populateEvents);

router.get("/GetWholeTable", eventController.GetWholeTable);

router.get("/getEventwithCondition", eventController.getEventwithCondition);

router.post("/AddNewEvent",eventController.AddNewEvent);
router.put("/UpdateEvent",eventController.UpdateEvent);

router.delete("/DeleteEventAtID",eventController.DeleteEventAtID);


module.exports = router;