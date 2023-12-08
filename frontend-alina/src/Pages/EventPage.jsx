import {
  CssBaseline,
  TextField,
  Typography,
  AppBar,
  Toolbar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Search } from "@material-ui/icons";
import Sidebar from "../Sidebar";
import EventPage_styles from "../Styling/EventPage_styles";
import useStyles from "../Styling/styles";
import { useParams } from "react-router-dom";

const EventPage = () => {
  const classes = EventPage_styles();
  const commonclasses = useStyles();

  const [formData, setFormData] = useState({
    event_id: "",
  });

  const [formData2, setFormData2] = useState({
    event_name: "",
    event_date: "",
    performer_id: "",
    venue_id: "",
  });

  const [formData3, setFormData3] = useState({
    performer_name: "",
    venue_name: "",
  });

  const id = useParams();

  const handleChangeUser = async () => {
    const inputID = id.event_id;
    console.log("this is the id from the url", inputID);

    try {
      const response = await fetch(
        `http://localhost:3005/events/findEventfromID?event_id=${inputID}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error fetching event_id: ${response.statusText}`);
      }

      const eventData = await response.json(); // Parse the response as JSON

      console.log("response data that we're setting to events", eventData);

      const [eventDetails] = eventData; // Assuming the data is an array

      const event_id = eventDetails?.[0];
      const event_name = eventDetails?.[1];
      const venue_id = eventDetails?.[2]; // Assuming this is the venue_name
      const event_date = eventDetails?.[3];
      const performer_id = eventDetails?.[6];

      console.log("Extracted event_id:", event_id);
      console.log("Extracted event_date:", event_date);
      console.log("Extracted event_name:", event_name);
      console.log("Extracted venue_name:", venue_id);
      console.log("Extracted performer:", performer_id);

      setFormData({
        ...formData,
        event_id,
      });

      setFormData2({
        ...formData2,
        event_name,
        venue_id,
        event_date,
        performer_id,
      });

      console.log("Updated FormData2:", formData2);
      console.log("Updated FormData:", formData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeVenue = async () => {
    const inputID = formData2.venue_id;
    console.log("this is the venue from the form", inputID);

    try {
      const response = await fetch(
        `http://localhost:3005/venues/getVenuefromID?venue_id=${inputID}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error fetching venue_id: ${response.statusText}`);
      }

      const venueData = await response.json();

      console.log("response data that we're getting from venues", venueData);

      const [venueDetails] = venueData;

      const venue_name = venueDetails?.[1];

      console.log("Extracted venue_name:", venue_name);

      setFormData3({
        ...formData3,
        venue_name,
      });

      console.log("Updated FormData3:", formData3);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangePerformer = async () => {
    const inputID = formData2.performer_id;
    console.log("this is the performer from the form", inputID);

    try {
      const response = await fetch(
        `http://localhost:3005/performers/getPerformerfromID?performer_id=${inputID}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error fetching performer_id: ${response.statusText}`);
      }

      const performerData = await response.json();

      console.log(
        "response data that we're getting from performers",
        performerData
      );

      const [performerDetails] = performerData;

      const performer_name = performerDetails?.[1];

      console.log("Extracted performer_name:", performer_name);

      setFormData3({
        ...formData3,
        performer_name,
      });

      console.log("Updated FormData3:", formData3);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleChangeUser();
  }, []);

  useEffect(() => {
    handleChangeVenue();
  }, [formData2.venue_id]);

  useEffect(() => {
    handleChangePerformer();
  }, [formData2.performer_id]);

  useEffect(() => {
    console.log("FormData:", formData);
  }, [formData]);

  useEffect(() => {
    console.log("FormData:", formData2);
  }, [formData2]);

  return (
    <CssBaseline>
      <div>
        <AppBar className={commonclasses.Appbar}>
          <Toolbar style={{ display: "flex", justifyContent: "center" }}>
            <Sidebar></Sidebar>
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
                <Typography variant="h5">{formData2.event_name}</Typography>
                <Typography variant="h5">{formData2.event_date}</Typography>

                <Typography variant="h5">{formData3.venue_name}</Typography>

                <Typography variant="h5">{formData3.performer_name}</Typography>
              </CardActions>

              <div className={classes.ButtonDiv}>
                <a href="./book">
                  <Button className={classes.Button}>BOOK TICKET</Button>
                </a>
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

export default EventPage;
