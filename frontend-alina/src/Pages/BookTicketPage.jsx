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
    event_id: "",
    ticket_id: "",
    ticket_type: "",
  });

  const handleChangeUser = async (event) => {
    const inputUsername = event.target.value;
    try {
      const response = await fetch(
        `http://localhost:3005/users/findIDfromusername?username=${inputUsername}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error fetching user_id: ${response.statusText}`);
      }

      const responseText = await response.text();

      const user_id = responseText ? JSON.parse(responseText)[0][0] : undefined;

      console.log("Extracted user_id:", user_id);

      setFormData({
        ...formData,
        user_id,
      });

      console.log("Updated FormData:", formData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("FormData:", formData);
  }, [formData]);

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

  const [ticket_type, setTicketType] = useState([]);
  const [selectedTicketType, setSelectedTicketType] = useState("");

  useEffect(() => {
    api
      .get("/ticket_type/GetWholeTable")
      .then((response) => {
        console.log("API Data:", response.data);
        setTicketType(
          response.data.map((TicketType) => ({
            ticket_type: TicketType[2],
            ticket_type_name: TicketType[1],
          }))
        );
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);

  const handleChangeTicketType = (selectedtickettype) => {
    const selectedTicketTypeObject = ticket_type.find(
      (TicketType) => TicketType.ticket_type === selectedtickettype
    );
    setSelectedTicketType(selectedTicketTypeObject);
    console.log("Selected Ticket Type:", selectedTicketTypeObject);
    setFormData({
      ...formData,
      ticket_type: selectedTicketTypeObject
        ? selectedTicketTypeObject.ticket_type
        : "",
    });
    console.log("FormData after ticketype Change:", formData);
  };

  const classes = BookTicketPage_styles();
  const commonclasses = useStyles();

  const getNextAvailableTicket = async (eventId) => {
    try {
      const response = await fetch(
        `http://localhost:3005/tickets/findNextId?event_id=${eventId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          `Error fetching next ticket_id: ${response.statusText}`
        );
      }

      const responseText = await response.text();
      const nextTicketId = responseText
        ? JSON.parse(responseText)[0][0]
        : undefined;

      console.log("Next Ticket ID:", nextTicketId);
      return nextTicketId;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  const handleBookings = async () => {
    try {
      const nextTicketId = await getNextAvailableTicket(formData.event_id);

      console.log("next ticket ki id", nextTicketId);

      if (nextTicketId === undefined) {
        console.log("No available tickets");
        return;
      }

      setFormData({
        ...formData,
        ticket_id: nextTicketId,
      });

      console.log("Form Data before fetch:", formData);

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
            {/* <Typography variant="h4" align="center">
              Ticketeer
            </Typography> */}
            <div className={classes.formField}>
              <TextField
                required
                id="outlined-required-2"
                variant="outlined"
                label="Username"
                name="user_id"
                className={classes.textField}
                onChange={handleChangeUser}
              />
            </div>
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
            <div className={classes.formField}>
              <FormControl style={{ width: "100%" }}>
                <InputLabel
                  id="demo-simple-select-helper-label"
                  style={{ textAlign: "center", marginLeft: 15 }}
                >
                  choose ticket type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={
                    selectedTicketType ? selectedTicketType.ticket_type : ""
                  }
                  label="ticket type"
                  name="ticket_type"
                  onChange={(booking) =>
                    handleChangeTicketType(booking.target.value)
                  }
                  input={<OutlinedInput label="Name" />}
                  style={{ width: "100%" }}
                >
                  {ticket_type.map((TicketType) => (
                    <MenuItem
                      key={TicketType.ticket_type}
                      value={TicketType.ticket_type}
                    >
                      {TicketType.ticket_type_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className={classes.ButtonDiv}>
              <Button onClick={handleBookings} className={classes.Button}>
                BOOK
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
