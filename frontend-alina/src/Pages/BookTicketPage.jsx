import React, { useEffect, useState } from "react";
import {
  AppBar,
  CssBaseline,
  Button,
  Toolbar,
  TextField,
  Typography,
  Card,
  CardContent,
  Container,
  MenuItem,
  OutlinedInput,
  Select,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import Sidebar from "../Sidebar";
import BookTicketPage_styles from "../Styling/BookTicketPage_styles";
import useStyles from "../Styling/styles";
import { useNavigate } from "react-router-dom";
import api from "../api";

const BookTicketPage = () => {
  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    user_id: "",
    ticket_id: "",
    event_id: "",
  });

  const handleInputChange = (booking) => {
    setFormData({
      ...formData,
      [booking.target.name]: booking.target.value,
    });
  };

  const handleBookings = async () => {
    try {
      console.log("Handle Bookings function called");
      console.log("Form Data:", formData);
      const response = await fetch(
        "http://localhost:3005/bookings/addnewBookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`Error while booking ticket: ${response.statusText}`);
      }

      const responseBody = await response.text();

      console.log(responseBody);

      if (responseBody === "Added") {
        console.log("Ticket booked!");
        Navigate("/home");
      } else {
        console.log("Unexpected response:", responseBody);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");

  useEffect(() => {
    api
      .get("/events/GetWholeTable")
      .then((response) => {
        console.log("API Data:", response.data);
        setEvents(
          response.data.map((event) => ({
            event_id: event[0],
            event_name: event[1],
          }))
        );
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);

  const handleChangeEvent = (selectedEventId) => {
    const selectedEventObject = events.find(
      (event) => event.event_id === selectedEventId
    );
    setSelectedEvent(selectedEventObject);
    console.log("Selected Event:", selectedEventObject);
    setFormData({
      ...formData,
      event_id: selectedEventObject ? selectedEventObject.event_id : "",
    });
    console.log("FormData after event Change:", formData);
  };

  const classes = BookTicketPage_styles();
  const commonclasses = useStyles();

  return (
    <CssBaseline>
      <div>
        <AppBar className={commonclasses.Appbar}>
          <Toolbar style={{ display: "flex", justifyContent: "center" }}>
            <Sidebar />
            <Typography className={classes.header} variant="h4">
              Ticketeer
            </Typography>
            <div style={{ marginLeft: "auto" }}>
              <Search />
            </div>
            <TextField
              label="Search..."
              variant="outlined"
              InputProps={{
                style: {
                  borderRadius: "30px",
                  backgroundColor: "#FFFFFF",
                },
              }}
            />
          </Toolbar>
        </AppBar>
      </div>

      <Container className={classes.middleDiv}>
        <Card className={classes.EventCard} sx={{ maxWidth: 800 }}>
          <CardContent>
            <Typography variant="h4" align="center">
              Ticketeer
            </Typography>
            <div className={classes.formField}>
              <FormControl style={{ width: "100%" }}>
                <InputLabel
                  id="demo-simple-select-helper-label"
                  style={{ textAlign: "center", marginLeft: 15 }}
                >
                  choose event
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={selectedEvent ? selectedEvent.event_id : ""}
                  label="Event"
                  name="event_id"
                  onChange={(booking) =>
                    handleChangeEvent(booking.target.value)
                  }
                  input={<OutlinedInput label="Name" />}
                  style={{ width: "100%" }}
                >
                  {events.map((event) => (
                    <MenuItem key={event.event_id} value={event.event_id}>
                      {event.event_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className={classes.ButtonDiv}>
              <Button onClick={handleInputChange} className={classes.Button}>
                CONTINUE
              </Button>
            </div>
          </CardContent>
        </Card>
      </Container>

      <footer align="center">
        <br />
        <br />
        <br />
        <br />
        <Typography variant="h5">Copyright © Ticketeer 2023</Typography>
        <p>Alina Afghan 24491</p>
      </footer>
    </CssBaseline>
  );
};

export default BookTicketPage;
