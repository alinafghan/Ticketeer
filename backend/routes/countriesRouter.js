const express = require("express");
const router = express.Router();
const countriesController = require("../controller/countriesController.js");

// router.delete("/", countriesController.removeAllCountries);

router.post("/populatecountries", countriesController.populateCountries); //WORKING

router.get("/GetWholeTable", countriesController.GetWholeTable); //WORKING

router.get("/getcountrieswithCondition", countriesController.getCountrieswithCondition); //working

router.post("/AddNewcountries",countriesController.AddNewCountries); //WORKING

router.put("/Updatecountries",countriesController.Updatecountries); //WORKING

router.delete("/DeletecountriesAtID",countriesController.DeleteCountriesAtID); //WORKING

router.delete("/DeletecountrieswithCondition",countriesController.DeleteCountriesWithCondition);


module.exports = router;