import React, { useEffect, useState } from "react";
import {
  CssBaseline,
  CardActions,
  CardMedia,
  Button,
  TextField,
  Typography,
  AppBar,
  Toolbar,
  Card,
  CardContent,
  MenuItem,
  OutlinedInput,
  Select,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import OrganizerSideBar from "../Components/OrganizerSideBar";
import DeleteEventPage_styles from "../Styling/DeleteEventPage_styles";
import useStyles from "../Styling/styles";
import api from "../api";
import { useNavigate } from "react-router-dom";

const DeleteEventPage = () => {
  const classes = DeleteEventPage_styles();
  const commonclasses = useStyles();
  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    event_id: "",
  });

  const handleDeleteEvent = async () => {
    try {
      console.log("Handle Delete Event function called");
      console.log("Form Data:", formData);
      const response = await fetch("http://localhost:3005/events/deleteEvent", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error while deleting event: ${response.statusText}`);
      }

      const responseBody = await response.text();

      console.log(responseBody);

      if (responseBody === "Deleted!") {
        console.log("Event deleted!");
        Navigate("/org_home");
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

  return (
    <CssBaseline>
      <div>
        <AppBar className={commonclasses.Appbar}>
          <Toolbar style={{ display: "flex", justifyContent: "center" }}>
            <OrganizerSideBar></OrganizerSideBar>
            <Typography className={classes.header} variant="h4">
              Ticketeer
            </Typography>
            <div style={{ marginLeft: "auto" }}>
              <Search></Search>
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
            ></TextField>
          </Toolbar>
        </AppBar>
      </div>

      <div className={classes.middleDiv}>
        <Card
          className={classes.Card}
          sx={{ maxWidth: 150, height: 200 }}
          elevation={9}
        >
          <div className={classes.CardLeft}>
            <CardMedia
              component="img"
              sx={{ height: 100, width: 200 }}
              src="/the_strokes.jpg"
              title="event_icon"
            />
          </div>

          <div className={classes.CardRight}>
            <CardContent>
              <CardActions>
                {/* <Typography variant="h5">EVENT</Typography> */}

                <Typography variant="h5"></Typography>

                <Typography variant="h5"></Typography>

                <Typography variant="h5"></Typography>

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
              </CardActions>

              <div className={classes.ButtonDiv}>
                <Button onClick={handleDeleteEvent} className={classes.Button}>
                  Delete Event
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>

      <footer align="center">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Typography variant="h5"> copyright © Ticketeer 2023 </Typography>
        <p>Alina Afghan 24491</p>
      </footer>
    </CssBaseline>
  );
};

export default DeleteEventPage;
