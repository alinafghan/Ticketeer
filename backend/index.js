const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path");
const port = 3005;

// Middleware setup
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

// app.use(express.static(path.join(__dirname, 'client/build')));

// Handle all other routes by serving the React app
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/build', 'index.js'));
// });

// Define the root route
app.get("/", (req, res) => {
  console.log("DB APP WORKING!");
  res.send("DB APP WORKING!");
});

const eventRouter = require("./routes/eventRouter");
app.use("/events", eventRouter);

const event_categoryRouter = require("./routes/event_categoryRouter");
app.use("/event_category", event_categoryRouter);

const countriesRouter = require("./routes/countriesRouter");
app.use("/countries", countriesRouter);

const locationsRouter = require("./routes/locationsRouter");
app.use("/locations", locationsRouter);

const organizersRouter = require("./routes/organizersRouter");
app.use("/organizers", organizersRouter);

const performerTypeARouter = require("./routes/performer_type_ARouter");
app.use("/performertypeA", performerTypeARouter);

const performerTypeBRouter = require("./routes/performer_type_BRouter");
app.use("/performertypesB", performerTypeBRouter);

const performerTypeRouter = require("./routes/performer_typeRouter");
app.use("/performertypes", performerTypeRouter);

const performerRouter = require("./routes/performerRouter");
app.use("/performers", performerRouter);

const seatsRouter = require("./routes/seatsRouter");
app.use("/seats", seatsRouter);

const ticketRouter = require("./routes/ticketRouter");
app.use("/tickets", ticketRouter);

const ticket_typeRouter = require("./routes/ticket_typeRouter");
app.use("/ticket_type", ticket_typeRouter);

const bookingsRouter = require("./routes/bookingsRouter");
app.use("/bookings", bookingsRouter);

const userRouter = require("./routes/userRouter");
app.use("/users", userRouter);

const venueRouter = require("./routes/venueRouter");
app.use("/venues", venueRouter);

const searchRouter = require("./routes/searchRouter");
app.use("/search", searchRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
