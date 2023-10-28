const express = require('express');

const eventController = require("../controller/eventController");
 
const router = express.Router();

router.get("/", eventController.GetWholeTable); // Use lowercase 'e'
router.post("/populate", eventController.populateEvents); // Use lowercase 'e'
router.delete("/deleteAll", eventController.removeAllEvents); // Use lowercase 'e'
router.get("/getEventwithConditions", eventController.getEventwithCondition); // Use lowercase 'e'
router.post("/addEvent", eventController.AddNewEvent); // Use lowercase 'e'
router.put('/updateEvent', eventController.UpdateEvent); // Use lowercase 'e'
router.delete('/deleteEvent', eventController.DeleteEventAtID); // Use lowercase 'e'

module.exports = router;