const express = require("express");
const { getConnection } = require('../config/connection');
const router = express.Router();
//const eventController = require("../controller/eventController.js");

router.get("/", async function (req, res) { // Use a function here
    let connection;
    try {
        connection = await getConnection();
        const result = await connection.execute("SELECT * from events");
        const data = result.rows;
        res.status(200).json(data);
    } catch (error) {
        console.error('Error executing SQL query:', error);
        res.status(500).send('Internal Server Error');
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (error) {
                console.error('Error closing database connection:', error);
            }
        }
    }
});

// Add other routes as needed

module.exports = router;
