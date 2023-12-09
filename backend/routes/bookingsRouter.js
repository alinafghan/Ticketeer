const express = require("express");
const router = express.Router();
const bookingsController = require("../controller/bookingsController.js");

router.delete("/", bookingsController.removeAllbookings);

router.get("/GetWholeTable", bookingsController.GetWholeTable);

router.get("/getbookingswithCondition", bookingsController.getbookingswithCondition);

router.post("/AddNewbookings", bookingsController.AddNewbookings);

router.put("/Updatebookings", bookingsController.Updatebookings);

router.delete("/DeletebookingsAtuserID", bookingsController.DeleteTransactionAtUserID);

router.delete("/DeletebookingsAtticketID",bookingsController.DeleteTransactionAtTicketID);

router.delete("/DeletebookingswithCondition", bookingsController.DeletebookingsWithCondition);

module.exports = router;
