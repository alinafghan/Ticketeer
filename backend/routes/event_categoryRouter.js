const express = require("express");
const { getConnection } = require('../config/connection');
const router = express.Router();
const event_categoryController = require("../controller/event_categoryController.js");

router.get("/GetWholeTable", event_categoryController.GetWholeTable);

router.delete("/delete", event_categoryController.removeAllevent_category);

router.post("/populateevent_categorys", event_categoryController.populateevent_category);

router.get("/getevent_categorywithCondition", event_categoryController.getevent_categorywithCondition);

router.post("/AddNewevent_category",event_categoryController.AddNewevent_category);

router.put("/Updateevent_category",event_categoryController.Updateevent_category);

router.delete("/Deleteevent_categoryAtID",event_categoryController.Deleteevent_categoryAtID);

router.delete("/Deleteevent_categorywithCondition",event_categoryController.Deleteevent_categoryWithCondition);

module.exports = router;