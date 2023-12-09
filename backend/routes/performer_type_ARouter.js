const express = require("express");
const router = express.Router();
const performer_type_AController = require("../controller/performer_type_AController.js");

router.delete("/", performer_type_AController.removeAllperformer_type_A);

router.get("/GetWholeTable", performer_type_AController.GetWholeTable);

router.get("/getperformer_type_AwithCondition", performer_type_AController.getperformer_type_AwithCondition);

router.post("/AddNewperformer_type_A",performer_type_AController.AddNewperformer_type_A);

router.put("/Updateperformer_type_A",performer_type_AController.Updateperformer_type_A);

router.delete("/Deleteperformer_type_AAtID",performer_type_AController.Deleteperformer_type_AAtID);

router.delete("/Deleteperformer_type_AAtID",performer_type_AController.Deleteperformer_type_AWithCondition);


module.exports = router;
