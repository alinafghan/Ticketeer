import React, { useEffect, useState } from "react";
import {
  CssBaseline,
  FormControl,
  OutlinedInput,
  MenuItem,
  Select,
  InputLabel,
  Button,
  TextField,
  Typography,
  AppBar,
  Toolbar,
  Card,
  CardContent,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import OrganizerSideBar from "../organizerSideBar";
import CreateEventPage_styles from "../Styling/CreateEventPage_styles";
import useStyles from "../Styling/styles";
import api from "../api";
import { useNavigate } from "react-router-dom";

const CreateEventPage = () => {
  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    event_name: "",
    venue_id: "",
    event_date: "",
    start_time: "",
    end_time: "",
    organizer_id: 1,
    performer_id: "",
    event_category_id: "",
    num_of_tickets: "",
    num_of_VIP_tickets: "",
  });

  const handleInputChange = (event) => {
    console.log("Event:", event);
    console.log("Current FormData:", formData);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleEvent = async () => {
    try {
      console.log("Handle Event function called");
      console.log("Form Data:", formData);
      const response = await fetch("http://localhost:3005/events/addEvent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error while adding event: ${response.statusText}`);
      }

      const responseBody = await response.text();

      console.log(responseBody);

      if (responseBody === "Added") {
        console.log("Event added!");
        Navigate("/home");
      } else {
        console.log("Unexpected response:", responseBody);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const classes = CreateEventPage_styles();
  const commonclasses = useStyles();

  const [venues, setVenues] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState("");

  useEffect(() => {
    api
      .get("/venues/GetWholeTable")
      .then((response) => {
        console.log("API Data:", response.data);
        setVenues(
          response.data.map((venue) => ({
            venue_id: venue[0],
            venue_name: venue[1],
          }))
        );
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);

  const handleChangeVenue = (selectedVenueId) => {
    const selectedVenueObject = venues.find(
      (venue) => venue.venue_id === selectedVenueId
    );
    setSelectedVenue(selectedVenueObject);
    console.log("Selected Venue:", selectedVenueObject);
    setFormData({
      ...formData,
      venue_id: selectedVenueObject ? selectedVenueObject.venue_id : "",
    });
    console.log("FormData after venue Change:", formData);
  };

  const [performers, setPerformers] = useState([]);
  const [selectedPerformer, setSelectedPerformer] = useState("");

  useEffect(() => {
    api
      .get("/performers/GetWholeTable")
      .then((response) => {
        console.log("API Data:", response.data);
        setPerformers(
          response.data.map((performer) => ({
            performer_id: performer[0],
            performer_name: performer[1],
          }))
        );
        console.log("API Data:", response.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);

  const handleChangePerformer = (selectedPerformerId) => {
    const selectedPerformerObject = performers.find(
      (performer) => performer.performer_id === selectedPerformerId
    );
    setSelectedPerformer(selectedPerformerObject);
    console.log("Selected Performer:", selectedPerformerObject);
    setFormData({
      ...formData,
      performer_id: selectedPerformerObject
        ? selectedPerformerObject.performer_id
        : "",
    });
    console.log("FormData after Performer Change:", formData);
  };

  const [eventCategories, setEventCategories] = useState([]);
  const [selectedEventCategory, setSelectedEventCategory] = useState("");

  useEffect(() => {
    api
      .get("/event_category/GetWholeTable")
      .then((response) => {
        console.log("API Data:", response.data);
        setEventCategories(
          response.data.map((event_category) => ({
            event_category_id: event_category[0],
            event_category_name: event_category[1],
          }))
        );
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);

  const handleChangeEventCategory = (selectedEventCategoryId) => {
    const selectedEventCategoryObject = eventCategories.find(
      (eventCategory) =>
        eventCategory.event_category_id === selectedEventCategoryId
    );
    setSelectedEventCategory(selectedEventCategoryObject);
    console.log("Selected Event Category:", selectedEventCategoryObject);
    setFormData({
      ...formData,
      event_category_id: selectedEventCategoryObject
        ? selectedEventCategoryObject.event_category_id
        : "",
    });
    console.log("FormData after Event Category Change:", formData);
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

      <div className={classes.middleDiv}>
        <div className={classes.ADiv}>
          <div className={classes.cardContainer}>
            <Card className={classes.EventCard} sx={{ maxWidth: 500 }}>
              <CardContent>
                <div className={classes.formField}>
                  <TextField
                    required
                    id="outlined-required-1"
                    variant="outlined"
                    label="Name of Event"
                    name="event_name"
                    className={classes.textField}
                    onChange={handleInputChange}
                  />
                </div>
                <br />
                <div className={classes.formField}>
                  <FormControl style={{ width: "100%" }}>
                    <InputLabel
                      id="demo-simple-select-helper-label"
                      style={{ textAlign: "center", marginLeft: 15 }}
                    >
                      Venue for event
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={selectedVenue ? selectedVenue.venue_id : ""}
                      label="Venue"
                      name="venue_id"
                      onChange={(event) =>
                        handleChangeVenue(event.target.value)
                      }
                      input={<OutlinedInput label="Name" />}
                      style={{ width: "100%" }}
                    >
                      {venues.map((venue) => (
                        <MenuItem key={venue.venue_id} value={venue.venue_id}>
                          {venue.venue_name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <br />
                <div className={classes.formField}>
                  <TextField
                    required
                    id="outlined-required-2"
                    variant="outlined"
                    label="Date of Event"
                    name="event_date"
                    className={classes.textField}
                    onChange={handleInputChange}
                  />
                </div>
                <br />
                <div className={classes.formField}>
                  <TextField
                    required
                    id="outlined-required-1"
                    variant="outlined"
                    label="Start Time..."
                    name="start_time"
                    className={classes.textField}
                    onChange={handleInputChange}
                  />
                </div>
                <br />
                <div className={classes.formField}>
                  <TextField
                    required
                    id="outlined-required-1"
                    variant="outlined"
                    label="End Time..."
                    name="end_time"
                    className={classes.textField}
                    onChange={handleInputChange}
                  />
                </div>

                <br />
              </CardContent>
            </Card>

            <div style={{ width: 16 }} />

            <Card className={classes.EventCard} sx={{ maxWidth: 500 }}>
              <CardContent>
                <div className={classes.formField}>
                  <FormControl style={{ width: "100%" }}>
                    <InputLabel
                      id="demo-simple-select-helper-label"
                      style={{ textAlign: "center", marginLeft: 15 }}
                    >
                      Performer for event
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={
                        selectedPerformer ? selectedPerformer.performer_id : ""
                      }
                      label="Performer"
                      name="performer_id"
                      onChange={(event) =>
                        handleChangePerformer(event.target.value)
                      }
                      input={<OutlinedInput label="Name" />}
                      style={{ width: "100%" }}
                    >
                      {performers.map((performer) => (
                        <MenuItem
                          key={performer.performer_id}
                          value={performer.performer_id}
                        >
                          {performer.performer_name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <br />
                <div className={classes.formField}>
                  <FormControl style={{ width: "100%" }}>
                    <InputLabel
                      id="demo-simple-select-helper-label"
                      style={{ textAlign: "center", marginLeft: 15 }}
                    >
                      Category of event
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={
                        selectedEventCategory
                          ? selectedEventCategory.event_category_id
                          : ""
                      }
                      label="Event Category"
                      name="event_category_id"
                      onChange={(event) =>
                        handleChangeEventCategory(event.target.value)
                      }
                      input={<OutlinedInput label="Name" />}
                      style={{ width: "100%" }}
                    >
                      {eventCategories.map((eventCategory) => (
                        <MenuItem
                          key={eventCategory.event_category_id}
                          value={eventCategory.event_category_id}
                        >
                          {eventCategory.event_category_name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <br />
                <div className={classes.formField}>
                  <TextField
                    required
                    id="outlined-required-2"
                    variant="outlined"
                    label="Number of Tickets"
                    name="num_of_tickets"
                    className={classes.textField}
                    onChange={handleInputChange}
                  />
                </div>
                <br />
                <div className={classes.formField}>
                  <TextField
                    required
                    id="outlined-required-3"
                    variant="outlined"
                    label="Number of VIP Tickets"
                    name="num_of_VIP_tickets"
                    className={classes.textField}
                    onChange={handleInputChange}
                  />
                </div>
                <br />
                {/* <div className={classes.formField}>
                  <TextField
                    required
                    id="outlined-required-4"
                    variant="outlined"
                    label="Number of General Tickets"
                    name="num_of_general_tickets"
                    className={classes.textField}
                    onChange={handleInputChange}
                  />
                </div> */}
                <br />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className={classes.ButtonDiv}>
          <Button onClick={handleEvent} className={classes.Button}>
            CONTINUE
          </Button>
        </div>
      </div>

      <footer align="center">
        <br />
        <br />
        <br />
        <br />
        <Typography variant="h5"> copyright © Ticketeer 2023 </Typography>
        <p>Alina Afghan 24491</p>
      </footer>
    </CssBaseline>
  );
};

export default CreateEventPage;
