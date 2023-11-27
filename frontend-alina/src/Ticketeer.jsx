import React from 'react';
import {Typography,CssBaseline} from '@material-ui/core';
import useStyles from './styles';

const Ticketeer = () => {

    const classes = useStyles();

    return(

        <CssBaseline>

            <div className={classes.headerDiv}>
                <Typography variant = 'h1'> TICKETEER </Typography>


            </div>

            <div className = {classes.bodyDiv}>


            </div>


        </CssBaseline>

    )
        
 }


 export default ticketeer;