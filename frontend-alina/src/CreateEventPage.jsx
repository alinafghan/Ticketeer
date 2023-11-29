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
import React from "react";
import { Search } from "@material-ui/icons";
import Sidebar from "./Sidebar";
import CreateEventPage_styles from "./CreateEventPage_styles";
import useStyles from "./styles";

const CreateEventPage = () => {
  const classes = CreateEventPage_styles();
  const commonclasses = useStyles();

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
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
                    style={{ textAlign: "center" ,marginLeft : 15 }}
                  >
                    Venue for event
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Venue"
                    onChange={handleChange}
                    input={
                      <OutlinedInput label="Name"></OutlinedInput>
                    }
                    style={{ width: "100%" }}
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value={10}>V1</MenuItem>
                    <MenuItem value={20}>V2</MenuItem>
                    <MenuItem value={30}>V3</MenuItem>
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
                <TextField
                  required
                  id="outlined-required-2"
                  variant="outlined"
                  label="Date of Event"
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

export default CreateEventPage;
