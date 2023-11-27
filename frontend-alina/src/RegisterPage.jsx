import React from "react";
import { Typography,Checkbox, Button,TextField, CssBaseline, Card, CardContent } from '@material-ui/core';
import RegisterStyles from './register_styles';

const Register = () => {
    const classes = RegisterStyles();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <CssBaseline>
            <div className={classes.Register_mainDiv}>
                <div className={classes.Register_LeftDiv}>
                    <Typography className={classes.Register_Leftwriting} variant='h2'> Register to our awesome website please Amama poopy</Typography>
                </div>
                <div className={classes.Register_RightDiv}>


                    <div className={classes.cardContainer}>
                        <Card className = {classes.RegisterCard} sx={{ maxWidth: 340}}>
                            <CardContent>

                            <Typography className = {classes.RegisterCardText} variant = 'h5'>Create an account </Typography>
                            <br></br>
                            <Typography className = {classes.RegisterCardText} variant = 'h8'>Register with Ticketeer!</Typography>
                            <br></br>  
                            <br></br>
                       
                                
                                
                                <div className={classes.formField}>
                                    
                                    <TextField size = 'small' required id="outlined-required-1" variant='outlined' label='Username...'className={classes.textField} />
                                </div>
                              
                                <div className={classes.formField}>
                                    
                                    <TextField size = 'small' required id="outlined-required-1" variant='outlined' label='Email...'className={classes.textField} />
                                </div>
                            
                                <div className={classes.formField}>
                                    
                                    <TextField  size = 'small' required id="outlined-required-1" variant='outlined' label='City/State/Region...'className={classes.textField} />
                                </div>
                           
                                <div className={classes.formField}>
                                    
                                    <TextField size = 'small' required id="outlined-required-1" variant='outlined' label='Phone Number...'className={classes.textField} />
                                </div>
                 
                                <div className={classes.formField}>
                                    {/* <Typography>Password : </Typography> */}
                                    <TextField size = 'small' required id="outlined-required-2" variant='outlined' label="Password..."className={classes.textField} />
                                </div>

                                <div className = {classes.LinksDiv}>

                                    <div className = {classes.ForgotPassDiv}>
                                <a href = "/">Forgot Password? </a>
                                </div>

                                <div className = {classes.AlrAccDiv}>

                                <a href = '/'>Already have an account?</a>

                                </div>
                                </div>

                                <div className={classes.RegisterCheckBoxDiv}>
  <Typography className={classes.RememberMeText}>Remember me</Typography>
  <Checkbox {...label} className={classes.RememberMeCheckbox} />
</div>

                                <br></br>
                              

                                <div className={classes.RegisterButtonDiv}>

                                <Button onClick =  "" className = {classes.RegisterButton} > Register </Button>

                                </div>

                                <br></br>


                            </CardContent>
                        </Card>

                        
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
            </div>
        </CssBaseline>
    );
}

export default Register;
