const express = require("express");
const router = express.Router();
const userController = require("../controller/userController.js");

router.delete("/", userController.removeAllusers);

router.post("/populateusers", userController.populateusers);

router.get("/GetWholeTable", userController.GetWholeTable);

router.get("/getuserwithCondition", userController.getuserswithCondition);

router.post("/AddNewuser",userController.AddNewuser);
router.put("/Updateuser",userController.Updateusers);

router.delete("/DeleteuserAtID",userController.DeleteUserAtID);
router.delete("/DeleteuserWithCondition", userController.DeleteUserWithCondition);



module.exports = router;