const express = require("express");
const router = express.Router();
const ticketController = require("../controller/ticket_typeController.js");

router.delete("/", ticketController.removeAllticket_type);

router.get("/GetWholeTable", ticketController.GetWholeTable);

router.get(
  "/getticketwithCondition",
  ticketController.getticket_typewithCondition
);

router.post("/AddNewticket", ticketController.AddNewticket_type);
router.put("/Updateticket", ticketController.Updateticket_type);

router.delete("/DeleteticketAtID", ticketController.Deleteticket_typeAtID);
router.delete(
  "/DeleteticketWithCondition",
  ticketController.Deleteticket_typeWithCondition
);

router.get("/findNextId", ticketController.FindNextAvailableTickForEvent);

module.exports = router;
