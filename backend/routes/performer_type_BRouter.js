const express = require("express");
const router = express.Router();
const performer_type_BController = require("../controller/performer_type_BController.js");

router.delete("/", performer_type_BController.removeAllperformer_type_B);

router.get("/GetWholeTable", performer_type_BController.GetWholeTable);

router.get("/getperformer_type_BwithCondition", performer_type_BController.getperformer_type_BwithCondition);

router.post("/AddNewperformer_type_B",performer_type_BController.AddNewperformer_type_B);

router.put("/Updateperformer_type_B",performer_type_BController.Updateperformer_type_B);

router.delete("/Deleteperformer_type_BAtID",performer_type_BController.Deleteperformer_type_BAtID);

router.delete("/Deleteperformer_type_BAtID",performer_type_BController.Deleteperformer_type_BWithCondition);


module.exports = router;
