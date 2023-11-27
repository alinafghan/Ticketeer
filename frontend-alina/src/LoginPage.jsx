import React from "react";
import { Typography, TextField, CssBaseline } from '@material-ui/core';
import loginStyles from './login_styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const Login = () => {
    const classes = loginStyles();

    return (
        <CssBaseline>
            <div className={classes.Login_mainDiv}>
                <div className={classes.Login_LeftDiv}>
                    <Typography className={classes.Login_Leftwriting} variant='h2'> Login to our awesome website please</Typography>
                </div>
                <div className={classes.Login_RightDiv}>
                    <div className={classes.cardContainer}>
                        <Card sx={{ maxWidth: 340 }}>
                            <CardContent>
                                <CardActions>
                                    <Typography>Username : </Typography>
                                    <TextField required id="outlined-required-1" variant='outlined' className={classes.textField} />

                                    <Typography>Password : </Typography>
                                    <TextField required id="outlined-required-2" variant='outlined' className={classes.textField} />

                                    <Typography>Password : </Typography>
                                    <TextField required id="outlined-required-3" variant='outlined' className={classes.textField} />

                                    <Typography>Password : </Typography>
                                    <TextField required id="outlined-required-4" variant='outlined' className={classes.textField} />
                                </CardActions>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </CssBaseline>
    );
}

export default Login;
