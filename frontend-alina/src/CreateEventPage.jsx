import React, { useEffect, useState } from 'react';
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
import Sidebar from "./Sidebar";
import CreateEventPage_styles from "./CreateEventPage_styles";
import useStyles from "./styles";
import api from './api';

const CreateEventPage = () => {
  const classes = CreateEventPage_styles();
  const commonclasses = useStyles();

  const [venues, setVenues] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState("");

  useEffect(() => {
    api.get('/venues/GetWholeTable')
      .then(response => {
        console.log('API Data:', response.data);
        setVenues(response.data);
      })
      .catch(error => {
        console.error('API Error:', error);
      });
  }, []);

  const handleChange = (venue) => {
    setSelectedVenue(venue.target.value);
  };

  const [performers, setPerformers] = useState([]);
  const [selectedPerformer, setSelectedPerformer] = useState("");

  useEffect(() => {
    api.get('/performer/GetWholeTable')
      .then(response => {
        console.log('API Data:', response.data);
        setPerformers(response.data);
      })
      .catch(error => {
        console.error('API Error:', error);
      });
  }, []);

  const handleChange2 = (performer) => {
    setSelectedPerformer(performer.target.value);
  };



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
        <div className={classes.cardContainer}>
          <Card className={classes.EventCard} sx={{ maxWidth: 500 }}>
            <CardContent>
              <div className={classes.formField}>
                <TextField
                  required
                  id="outlined-required-1"
                  variant="outlined"
                  label="Name of Event"
                  className={classes.textField}
                />
              </div>
              <br></br>
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
                    value={selectedVenue}
                    label="Venue"
                    onChange={handleChange}
                    input={<OutlinedInput label="Name"></OutlinedInput>}
                    style={{ width: "100%" }}
                  >
                    {venues.map((venue) => (
                      <MenuItem key={venue[0]} value={venue[0]}>
                        {venue[1]}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <br></br>
              <div className={classes.formField}>
                <TextField
                  required
                  id="outlined-required-2"
                  variant="outlined"
                  label="Date of Event"
                  className={classes.textField}
                />
              </div>
              <br></br>
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
                    value={selectedPerformer}
                    label="Performer"
                    onChange={handleChange2}
                    input={<OutlinedInput label="Name"></OutlinedInput>}
                    style={{ width: "100%" }}
                  >
                    {performers.map((performer) => (
                      <MenuItem key={performer[0]} value={performer[0]}>
                        {performer[1]}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <br></br>
              <div
                className={classes.CreateEventButtonDiv}
                display="flex"
                justifyContent="center"
              >
                <div>
                  {" "}
                  <a href="/create/event/page2">
                  <Button
                    variant="outlined"
                    onClick="/page2"
                    className={classes.CreateEventButton}
                  >
                    Continue
                  </Button>
                  </a>
                </div>
              </div>
              <br></br>
            </CardContent>
          </Card>
        </div>
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

export default CreateEventPage;
