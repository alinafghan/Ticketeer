import React from "react";
import { useEffect, useState } from "react";
import {
  Typography,
  Checkbox,
  Button,
  TextField,
  CssBaseline,
  Card,
  CardContent,
} from "@material-ui/core";
import loginStyles from "../Styling/login_styles";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();
  const classes = loginStyles();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [formData, setFormData] = useState({
    user_id: "",
  });

  const handleChangeUser = async (event) => {
    const inputUsername = event.target.value;
    console.log("username from frontend", inputUsername);
    try {
      const response = await fetch(
        `http://localhost:3005/users/findIDfromusername?username=${inputUsername}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error fetching user_id: ${response.statusText}`);
      }

      const responseText = await response.text();

      const user_id = responseText ? JSON.parse(responseText)[0][0] : undefined;

      console.log("Extracted user_id:", user_id);

      setFormData({
        ...formData,
        user_id,
      });

      console.log("Updated FormData:", formData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("FormData:", formData);
  }, [formData]);

  const DoesUserExist = async (event) => {
    const user_id = formData.user_id;
    console.log("user_id from frontend", user_id);
    try {
      const response = await fetch(
        `http://localhost:3005/users/DoesUserExist?user_id=${user_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          `Error seeing if id exists, from frontend: ${response.statusText}`
        );
      }

      const responseBody = await response.text();

      if (responseBody === "User exists!") {
        console.log("Ticket booked!");
        Navigate("/home");
      } else {
        console.log("Unexpected response:", responseBody);
      }
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  return (
    <CssBaseline>
      <div className={classes.Login_mainDiv}>
        <div className={classes.Login_LeftDiv}>
          <Typography className={classes.Login_Leftwriting} variant="h2">
            {" "}
            Login to Ticketeer
          </Typography>
        </div>
        <div className={classes.Login_RightDiv}>
          <div className={classes.cardContainer}>
            <Card className={classes.LoginCard} sx={{ maxWidth: 340 }}>
              <CardContent>
                <Typography className={classes.LoginCardText} variant="h4">
                  Already have an account?{" "}
                </Typography>
                <br></br>
                <Typography className={classes.LoginCardText} variant="h7">
                  Log in as <a href="./loginOrg">organizer</a> instead
                </Typography>
                <br></br>
                <br></br>
                <br></br>

                <div className={classes.formField}>
                  <TextField
                    required
                    id="outlined-required-1"
                    variant="outlined"
                    label="Username..."
                    name="user_id"
                    className={classes.textField}
                    onChange={handleChangeUser}
                  />
                </div>
                <br></br>
                <div className={classes.formField}>
                  {/* <Typography>Password : </Typography> */}
                  <TextField
                    required
                    id="outlined-required-2"
                    variant="outlined"
                    label="Password..."
                    name="password"
                    className={classes.textField}
                    // onChange = {handleChangePassword}
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

                <div className={classes.LoginCheckBoxDiv}>
                  <Typography className={classes.RememberMeText}>
                    Remember me
                  </Typography>
                  <Checkbox {...label} className={classes.RememberMeCheckbox} />
                </div>

                <br></br>
                <br></br>

                <div className={classes.LoginButtonDiv}>
                  <Button
                    onClick={DoesUserExist}
                    className={classes.LoginButton}
                  >
                    {" "}
                    LOGIN{" "}
                  </Button>
                </div>

                <br></br>
              </CardContent>
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
        </div>
      </div>
    </CssBaseline>
  );
};

export default Login;
