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
import Sidebar from "../Components/Sidebar";
import EventPage_styles from "../Styling/EventPage_styles";
import useStyles from "../Styling/styles";
import { useParams } from "react-router-dom";

const EventPage = () => {
  const classes = EventPage_styles();
  const commonclasses = useStyles();

  const [formData2, setFormData2] = useState({
    event_name: "",
    event_date: "",
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

      const eventData = await response.json();

      console.log("response data that we're setting to events", eventData);

      const [eventDetails] = eventData;

      const event_name = eventDetails?.[0];
      const venue_name = eventDetails?.[2];
      const event_date = eventDetails?.[1];
      const performer_name = eventDetails?.[3];

      console.log("Extracted event_date:", event_date);
      console.log("Extracted event_name:", event_name);
      console.log("Extracted venue_name:", venue_name);
      console.log("Extracted performer:", performer_name);

      setFormData2({
        ...formData2,
        event_name,
        venue_name,
        event_date,
        performer_name,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleChangeUser();
  }, []);

  // useEffect(() => {
  //   console.log("FormData:", formData);
  // }, [formData]);

  // useEffect(() => {
  //   console.log("FormData2:", formData2);
  // }, [formData2]);

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

                <Typography variant="h5">{formData2.venue_name}</Typography>

                <Typography variant="h5">{formData2.performer_name}</Typography>
              </CardActions>

              <div className={classes.ButtonDiv}>
                <a href="/book">
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
