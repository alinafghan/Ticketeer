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

const CreateEventPage2 = () => {
  const classes = CreateEventPage_styles();
  const commonclasses = useStyles();

  const [event_category, setevent_category] = useState([]);
  const [selectedevent_category, setSelectedevent_category] = useState("");

  useEffect(() => {
    api.get('/event_category/GetWholeTable')
      .then(response => {
        console.log('API Data:', response.data);
        setevent_category(response.data);
      })
      .catch(error => {
        console.error('API Error:', error);
      });
  }, []);

  const handleChange = (event_category) => {
    setSelectedevent_category(event_category.target.value);
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
                  label="Start Time..."
                  className={classes.textField}
                />
          
              </div>
              <br></br>

              <div className={classes.formField}>
                <TextField
                  required
                  id="outlined-required-1"
                  variant="outlined"
                  label="End Time..."
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
                    Category of event
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={selectedevent_category}
                    label="event_category"
                    onChange={handleChange}
                    input={<OutlinedInput label="Name"></OutlinedInput>}
                    style={{ width: "100%" }}
                  >
                    {event_category.map((event_category) => (
                      <MenuItem key={event_category[0]} value={event_category[0]}>
                        {event_category[1]}
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
                  label="Number of Tickets"
                  className={classes.textField}
                />
              </div>
              <br></br>
             
          
              <div
                className={classes.CreateEventButtonDiv}
                display="flex"
                justifyContent="center"
              >
                <div>
                  {" "}
                  <Button
                    variant="outlined"
                    onClick=""
                    className={classes.CreateEventButton}
                  >
                    Continue
                  </Button>
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

export default CreateEventPage2;
