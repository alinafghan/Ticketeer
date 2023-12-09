import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  AppBar,
  Button,
  TextField,
  CssBaseline,
  Grid,
  Toolbar,
  CardActionArea,
} from "@material-ui/core";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Search } from "@material-ui/icons";
import HomePage_styles from "../Styling/HomePage_styles";
import useStyles from "../Styling/styles";
import api from "../api";
import OrganizerSideBar from "../Components/OrganizerSideBar";
import BasicMenu from "../Components/FilterMenu";

const OrganizerHomePage = () => {
  const classes = HomePage_styles();
  const commonclasses = useStyles();

  const [events, setEvents] = useState([]);

  useEffect(() => {
    api
      .get("/events/GetWholeTable")
      .then((response) => {
        console.log("API Data:", response.data);
        console.log("something something");
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);

  const handleSortBy = async (groupByField) => {
    try {
      const response = await fetch(
        `http://localhost:3005/events/filterby?sortBy=${groupByField}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          `Error grouping by ${groupByField}: ${response.statusText}`
        );
      }

      const groupedEvents = await response.json();

      setEvents(groupedEvents);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <CssBaseline>
        <div>
          <AppBar className={commonclasses.Appbar}>
            <Toolbar style={{ display: "flex", justifyContent: "center" }}>
              <OrganizerSideBar></OrganizerSideBar>
              <Typography variant="h4">Ticketeer</Typography>
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

        <br></br>
        <br></br>
        <br></br>

        <main className={classes.main}>
          <div className={classes.HomeTop}>
            <div className={classes.parent}>
              <div className={classes.one}>
                <Typography variant="h5" color="textPrimary" gutterBottom>
                  Happening soon near you! <a href="/"> Change location</a>
                </Typography>
              </div>
              <div className={classes.two}>
                <BasicMenu handleGroupBy={handleSortBy}></BasicMenu>
              </div>
            </div>
          </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div className={classes.gridContainer}>
            <Grid container spacing={9} justify="center">
              {events.map((event) => (
                <Grid key={event[0]} item xs={12} sm={3}>
                  <Card sx={{ maxWidth: 340 }}>
                    <CardActionArea component={Link} to={`/event/${event[0]}`}>
                      {" "}
                      <CardMedia
                        component="img"
                        sx={{ height: 180 }}
                        src="/sample.jpg"
                        title="event_icon"
                      />
                      <CardContent>
                        <CardActions>
                          <Button size="big">{event[1]}</Button>
                          <Button size="big">{event[2]}</Button>
                          <Button size="big">{event[3]}</Button>
                        </CardActions>
                        <Typography variant="body" color="text.secondary">
                          short event description here
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </main>

        <footer align="center">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Typography variant="h5"> copyright © Ticketeer 2023 </Typography>
          <p>Alina Afghan 24491</p>
        </footer>
      </CssBaseline>
    </>
  );
};

export default OrganizerHomePage;
