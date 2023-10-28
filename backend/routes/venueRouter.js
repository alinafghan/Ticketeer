const express = require("express");
const router = express.Router();
const venueController = require("../controller/VenueController.js");

router.delete("/", venueController.removeAllVenues);

router.post("/populateVenues", venueController.populateVenues);

router.get("/GetWholeTable", venueController.GetWholeTable);

router.get("/getVenuewithCondition", venueController.getVenueswithCondition);

router.post("/AddNewVenue",venueController.AddNewVenue);
router.put("/UpdateVenue",venueController.UpdateVenues);

router.delete("/DeleteVenueAtID",venueController.DeleteVenueAtID);


module.exports = router;