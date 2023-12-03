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
} from "@material-ui/core";
import React from "react";
import { Search } from "@material-ui/icons";
import Sidebar from "./Sidebar";
import EventPage_styles from "./EventPage_styles";
import useStyles from "./styles";

const EventPage = () => {
  const classes = EventPage_styles();
  const commonclasses = useStyles();

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
                {/* Each TextField and Select is placed in a separate div for a new line */}
                <div className={classes.formField}>
                  <TextField
                    required
                    id="outlined-required-1"
                    variant="outlined"
                    label="Event Name"
                    className={classes.textField}
                  />
                </div>

                <div className={classes.formField}>
                  <TextField
                    required
                    id="outlined-required-2"
                    variant="outlined"
                    label="Event Name"
                    className={classes.textField}
                  />
                </div>

                <div className={classes.formField}>
                  <TextField
                    required
                    id="outlined-required-3"
                    variant="outlined"
                    label="Event Name"
                    className={classes.textField}
                  />
                </div>

                <div className={classes.formField}>
                  <TextField
                    required
                    id="outlined-required-4"
                    variant="outlined"
                    label="Event Name"
                    className={classes.textField}
                  />
                </div>
              </CardActions>
              <Typography variant="body" color="text.secondary">
                short event here
              </Typography>
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
