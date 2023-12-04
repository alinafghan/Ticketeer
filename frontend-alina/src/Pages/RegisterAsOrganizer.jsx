import React, { useState } from "react";
import {
  Typography,
  Checkbox,
  Button,
  TextField,
  CssBaseline,
  Card,
  CardContent,
} from "@material-ui/core";
import RegisterStyles from "../Styling/register_styles";
import { useNavigate } from "react-router-dom";

const RegisterAsOrganizer = () => {
  const Navigate = useNavigate();

  const classes = RegisterStyles();

  const [formData, setFormData] = useState({
    organizer_name: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      console.log("Handle Register function called");
      const response = await fetch(
        "http://localhost:3005/organizers/AddNeworganizers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`Error during registration: ${response.statusText}`);
      }

      const responseBody = await response.text();

      console.log(responseBody);

      if (responseBody === "Added") {
        console.log("Registration successful!");
        Navigate("/loginOrg");
      } else {
        console.log("Unexpected response:", responseBody);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CssBaseline>
      <div className={classes.Register_mainDiv}>
        <div className={classes.Register_LeftDiv}>
          <Typography className={classes.Register_Leftwriting} variant="h2">
            Make your own events as an organizer!
          </Typography>
        </div>
        <div className={classes.Register_RightDiv}>
          <div className={classes.cardContainer}>
            <Card className={classes.RegisterCard} sx={{ maxWidth: 340 }}>
              <CardContent>
                <Typography className={classes.RegisterCardText} variant="h5">
                  Create an account
                </Typography>
                <br></br>
                <Typography className={classes.RegisterCardText} variant="h8">
                  Register as organizer with Ticketeer!
                </Typography>
                <br></br>
                <br></br>
                <div className={classes.formField}>
                  <TextField
                    size="small"
                    required
                    id="outlined-required-1"
                    variant="outlined"
                    label="Username..."
                    name="organizer_name"
                    className={classes.textField}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={classes.formField}>
                  <TextField
                    size="small"
                    required
                    id="outlined-required-1"
                    variant="outlined"
                    label="Email..."
                    name="email"
                    className={classes.textField}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={classes.formField}>
                  <TextField
                    size="small"
                    required
                    id="outlined-required-1"
                    variant="outlined"
                    label="Phone Number..."
                    name="phone_number"
                    className={classes.textField}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={classes.formField}>
                  <TextField
                    size="small"
                    required
                    id="outlined-required-2"
                    variant="outlined"
                    label="Password..."
                    name="password"
                    type="password"
                    className={classes.textField}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={classes.LinksDiv}>
                  <div className={classes.ForgotPassDiv}>
                    <a href="/">Forgot Password? </a>
                  </div>
                  <div className={classes.AlrAccDiv}>
                    <a href="/">Already have an account?</a>
                  </div>
                </div>
                <div className={classes.RegisterCheckBoxDiv}>
                  <Typography className={classes.RememberMeText}>
                    Remember me
                  </Typography>
                  <Checkbox className={classes.RememberMeCheckbox} />
                </div>
                <br></br>
                <div className={classes.RegisterButtonDiv}>
                  <Button
                    onClick={handleRegister}
                    className={classes.RegisterButton}
                  >
                    Register
                  </Button>
                </div>
                <br></br>
              </CardContent>
            </Card>
            <footer align="center">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Typography variant="h5"> copyright © Ticketeer 2023 </Typography>
              <p>Alina Afghan 24491</p>
            </footer>
          </div>
        </div>
      </div>
    </CssBaseline>
  );
};

export default RegisterAsOrganizer;
