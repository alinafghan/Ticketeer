import React from 'react';
import {Typography,CssBaseline,Button} from '@material-ui/core';
import frontpageStyles from './Ticketeer_styles';
import FrontSideBar from './FrontSidebar';

const Ticketeer = () => {

    const classes = frontpageStyles();

    return(

        <CssBaseline>

            <div className={classes.headerDiv}>

                <FrontSideBar></FrontSideBar>


                <Typography variant = 'h1'> TICKETEER </Typography>

                <Typography variant = 'h1'> Buy your tickets now, wherever, whenever </Typography>

                


            </div>

            <div className = {classes.bodyDiv}>

                <div className = {classes.ButtonsDiv}>

                    <Button></Button>

                    <Button></Button>



                </div>


            </div>


        </CssBaseline>

    )
        
 }

 export default Ticketeer;