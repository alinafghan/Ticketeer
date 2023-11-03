const express = require("express");
const router = express.Router();
const ticketController = require("../controller/ticketController.js");

router.delete("/", ticketController.removeAllTickets);

router.post("/populatetickets", ticketController.populateTickets);

router.get("/GetWholeTable", ticketController.GetWholeTable);

router.get("/getticketwithCondition", ticketController.getTicketswithCondition);

router.post("/AddNewticket",ticketController.AddNewTickets);
router.put("/Updateticket",ticketController.UpdateTickets);

router.delete("/DeleteticketAtID",ticketController.DeleteTicketsAtID);
router.delete("/DeleteticketWithCondition", ticketController.DeleteTicketsWithCondition);


module.exports = router;