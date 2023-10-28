const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;

// Middleware setup
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Define the root route
app.get("/", (req, res) => {
    console.log("DB APP WORKING!");
    res.send("DB APP WORKING!");
});


  

// Import and use the event router
const eventRouter = require("./routes/eventRouter");
app.use("/events", eventRouter);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
