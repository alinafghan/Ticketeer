const express = require("express");
const router = express.Router();
const venueController = require("../controller/venueController.js");

router.delete("/", venueController.removeAllVenues);

router.get("/GetWholeTable", venueController.GetWholeTable);

router.get("/getVenuewithCondition", venueController.getVenueswithCondition);

router.post("/AddNewVenue", venueController.AddNewVenue);
router.put("/UpdateVenue", venueController.UpdateVenues);

router.delete("/DeleteVenueAtID", venueController.DeleteVenueAtID);
router.get("/getVenuefromID", venueController.FindVenuefromID);

module.exports = router;
