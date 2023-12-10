const express = require("express");
const router = express.Router();
const performer_typeController = require("../controller/performer_typeController.js");

router.delete("/", performer_typeController.removeAllperformer_type);

router.get("/GetWholeTable", performer_typeController.GetWholeTable);

router.get(
  "/getperformer_typewithCondition",
  performer_typeController.getperformer_typewithCondition
);

router.post(
  "/AddNewperformer_type",
  performer_typeController.AddNewperformer_type
);

router.put(
  "/Updateperformer_type",
  performer_typeController.Updateperformer_type
);

router.delete(
  "/Deleteperformer_typeAtID",
  performer_typeController.Deleteperformer_typeAtID
);

router.delete(
  "/Deleteperformer_typeAtID",
  performer_typeController.DeletePerformer_TypeWithCondition
);

module.exports = router;
