const express = require("express");
const router = express.Router();
const performerController = require("../controller/performerController.js");

router.delete("/", performerController.removeAllPerformers);

router.get("/GetWholeTable", performerController.GetWholeTable);

router.get(
  "/getperformerwithCondition",
  performerController.getPerformerswithCondition
);

router.post("/AddNewperformer", performerController.AddNewPerformer);
router.put("/Updateperformer", performerController.UpdatePerformers);

router.delete("/DeleteperformerAtID", performerController.DeletePerformerAtID);
router.delete(
  "/DeletePerformerWithCondition",
  performerController.DeletePerformerWithCondition
);
router.get("/getPerformerfromID", performerController.FindPerformerfromID);

module.exports = router;
