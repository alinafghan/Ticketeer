const express = require("express");
const router = express.Router();
const transactionsController = require("../controller/transactionController.js");

router.delete("/", transactionsController.removeAlltransactions);

router.post("/populatetransactionss", transactionsController.populatetransactions);

router.get("/GetWholeTable", transactionsController.GetWholeTable);

router.get("/gettransactionswithCondition", transactionsController.gettransactionswithCondition);

router.post("/AddNewtransactions",transactionsController.AddNewtransactions);

router.put("/Updatetransactions",transactionsController.UpdateTransactions);

router.delete("/DeletetransactionsAtuserID",transactionsController.DeleteTransactionAtUserID);

router.delete("/DeletetransactionsAtticketID",transactionsController.DeleteTransactionAtTicketID);

router.delete("/DeletetransactionswithCondition",transactionsController.DeleteTransactionsWithCondition);


module.exports = router;