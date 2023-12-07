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
import { useNavigate } from "react-router-dom";

const EventPage = () => {
  const classes = EventPage_styles();
  const commonclasses = useStyles();

  const [formData, setFormData] = useState({
    event_id: "",
  });

  const id = useParams();

  const handleChangeUser = async (event) => {
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

      const responseText = await response.text();

      console.log("entire response", responseText);

      const event_id = responseText
        ? JSON.parse(responseText)[0][0]
        : undefined;

      const event_name = responseText
        ? JSON.parse(responseText)[0][1]
        : undefined;

      const venue_id = responseText
        ? JSON.parse(responseText)[0][2]
        : undefined;

      const event_date = responseText
        ? JSON.parse(responseText)[0][3]
        : undefined;

      const performer = responseText
        ? JSON.parse(responseText)[0][6]
        : undefined;

      console.log("Extracted event_id:", event_id);
      console.log("Extracted event_date:", event_date);

      console.log("Extracted event_name:", event_name);
      console.log("Extracted venue_id:", venue_id);
      console.log("Extracted performer:", performer);

      setFormData({
        ...formData,
        event_id,
      });

      console.log("Updated FormData:", formData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("FormData:", formData);
  }, [formData]);

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
                <Typography variant="h5">EVENT NAME</Typography>

                <Typography variant="h5">EVENT DATE</Typography>

                <Typography variant="h5">VENUE</Typography>

                <Typography variant="h5">PERFORMER</Typography>
              </CardActions>

              <div className={classes.ButtonDiv}>
                {/* <a href="./book"> */}
                <Button onClick={handleChangeUser} className={classes.Button}>
                  BOOK TICKET
                </Button>
                {/* </a> */}
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
