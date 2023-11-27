import React from 'react';
import {Typography,CssBaseline,Button, Divider} from '@material-ui/core';
import frontpageStyles from './Ticketeer_styles';
import FrontSideBar from './FrontSidebar';

const Ticketeer = () => {

    const classes = frontpageStyles();

    return(

        <CssBaseline>

            <div className={classes.headerDiv}>

                <div className = {classes.FrontSidebar}>

                <FrontSideBar></FrontSideBar>

                </div>


                <Typography className = {classes.logintitle} variant = 'h1'> TICKETEER </Typography>

                <Typography className= {classes.frontpageLine} variant = 'h4'> Buy your tickets now, wherever, whenever </Typography>


            </div>

            <Divider></Divider>

            <div className = {classes.bodyDiv}>

                <div className = {classes.ButtonsDiv}>

                    <Button className = {classes.LoginButton} > LOGIN </Button>

                    <br></br>
                    <br></br>

                    <Button className = {classes.RegisterButton}> REGISTER </Button>



                </div>


            </div>

            <div className = {classes.middleDiv}>

                <Typography className = {classes.middleDivWriting}>

                    lorem ispum dolor hbfuerniwrnb dfvev trbnt nbrtkbrg brgb
                </Typography>




            </div>

            <div className = {classes.middle2Div}>

                <div className = {classes.middle2Left}>

                    <Typography className = {classes.middle2Leftwriting}>leftside</Typography>

                </div>

                <div className = {classes.middle2Mid}>

                    <Typography className = {classes.middle2midwriting}>middle</Typography>
                    
                </div>

                <div className = {classes.middle2Right}>

                    <Typography className = {classes.middle2Rightwriting}>rightside</Typography>
                    
                </div>









            </div>


        </CssBaseline>

    )
        
 }

 export default Ticketeer;