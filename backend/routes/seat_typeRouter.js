const express = require("express");
const router = express.Router();
const seat_typeController = require("../controller/seat_typeController.js");

// router.delete("/", seat_typeController.removeAllseat_type);

router.post("/populateseat_type", seat_typeController.populateseat_type);

router.get("/GetWholeTable", seat_typeController.GetWholeTable);

// router.get("/getseat_typewithCondition", seat_typeController.getseat_typewithCondition);

router.post("/AddNewseat_type",seat_typeController.AddNewseat_type);

// router.put("/Updateseat_type",seat_typeController.Updateseat_type);

// router.delete("/Deleteseat_typeAtID",seat_typeController.Deleteseat_typeAtID);

// router.delete("/Deleteseat_typewithCondition",seat_typeController.Deleteseat_typeWithCondition);


module.exports = router;