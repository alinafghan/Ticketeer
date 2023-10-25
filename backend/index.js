const bodyParser = require('body-parser');
const cors = require('cors');

//routers

const express = require('express');

const app = express();
const port = 8000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    console.log("MESSAGE PRINTED");
    return res.send("DB APP WORKING!");
});


const eventRouter = require("./routes/eventRouter");
/*const userRouter = require('./router/desertRouter.js');
const venueRouter = require('./router/personRouter.js');
const ticketRouter = require('./router/orderRouter.js');
const transactionRouter = require('./router/tableCreationRouter.js');*/

app.use("/event", eventRouter);
/*app.use("/user", userRouter);
app.use("/venue", venueRouter);
app.use("/ticket", ticketRouter);
app.use("/transaction", transactionRouter);
*/


app.listen(8000, () => {
    console.log("Server listening on port 8000");
});


//console.log("jofsjdgjd");