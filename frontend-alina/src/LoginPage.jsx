import React from "react";
import { Typography,Checkbox, Button,TextField, CssBaseline, Card, CardContent } from '@material-ui/core';
import loginStyles from './login_styles';

const Login = () => {
    const classes = loginStyles();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <CssBaseline>
            <div className={classes.Login_mainDiv}>
                <div className={classes.Login_LeftDiv}>
                    <Typography className={classes.Login_Leftwriting} variant='h2'> Login to our awesome website please Amama poopy</Typography>
                </div>
                <div className={classes.Login_RightDiv}>


                    <div className={classes.cardContainer}>
                        <Card className = {classes.LoginCard} sx={{ maxWidth: 340}}>
                            <CardContent>

                            <Typography className = {classes.LoginCardText} variant = 'h4'>Already have an account? </Typography>
                            <br></br>
                            <Typography className = {classes.LoginCardText} variant = 'h7'>Log in to Ticketeer below.</Typography>
                            <br></br>  
                            <br></br>
                            <br></br>
                                
                                
                                <div className={classes.formField}>
                                    
                                    <TextField required id="outlined-required-1" variant='outlined' label='Username...'className={classes.textField} />
                                </div>
                                <br></br>
                                <div className={classes.formField}>
                                    {/* <Typography>Password : </Typography> */}
                                    <TextField required id="outlined-required-2" variant='outlined' label="Password..."className={classes.textField} />
                                </div>
                                <div className = {classes.ForgotPassDiv}>
                                <a href = "/">Forgot Password?</a>
                                </div>

                                <div className={classes.LoginCheckBoxDiv}>
  <Typography className={classes.RememberMeText}>Remember me</Typography>
  <Checkbox {...label} className={classes.RememberMeCheckbox} />
</div>

                                <br></br>
                                <br></br>

                                <div className={classes.LoginButtonDiv}>

                                <Button onClick =  "" className = {classes.LoginButton} > LOGIN </Button>

                                </div>

                                <br></br>


                            </CardContent>
                        </Card>
                    </div>



                    <footer align='center'>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Typography variant='h5'>  copyright © Ticketeer 2023 </Typography>
          <p>Alina Afghan 24491</p>
        </footer>



                </div>
            </div>
        </CssBaseline>
    );
}

export default Login;
