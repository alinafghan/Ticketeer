import React from 'react';
import { Typography, CssBaseline, Button, Divider } from '@material-ui/core';
import frontpageStyles from './Ticketeer_styles';
import FrontSideBar from './FrontSidebar';
import { useState } from 'react';
import useStyles from './styles';

const Ticketeer = () => {
  const classes = frontpageStyles();
  const commonclasses = useStyles();

  const [isHoveringLeft, setIsHoveringLeft] = useState(false);

  const handleMouseOverLeft = () => {
    setIsHoveringLeft(true);
  };

  const handleMouseOutLeft = () => {
    setIsHoveringLeft(false);
  };

  const [isHoveringMiddle, setIsHoveringMiddle] = useState(false);

  const handleMouseOverMiddle = () => {
    setIsHoveringMiddle(true);
  };

  const handleMouseOutMiddle = () => {
    setIsHoveringMiddle(false);
  };

  return (
    <CssBaseline>
      <div className={classes.Ticketeer}>
      <div className={classes.headerDiv}>
        <div className={classes.FrontSidebar}>
          <FrontSideBar></FrontSideBar>
        </div>
        <Typography className={classes.logintitle} variant='h1'>
          TICKETEER
        </Typography>
        <Typography className={classes.frontpageLine} variant='h4'>
          Buy your tickets now, wherever, whenever
        </Typography>
      </div>
      <div className={classes.bodyDiv}>
        <div className={classes.ButtonsDiv}>
          <a href = "/login">
          <Button className={classes.LoginButton}>LOGIN</Button>
          </a>
          <br></br>
          <br></br>
          <a href = "/register">
          <Button className={classes.RegisterButton}>REGISTER</Button>
          </a>
        </div>
      </div>
      <Divider variant='middle'></Divider>
      <div className={classes.middleDiv}>
        <Typography variant='h4' className={classes.middleDivWriting}>
          We believe that in a world where people have become numbers, a personal approach is key to ensure you get the most out of your customer experience.
        </Typography>
      </div>
      <div className={classes.middle2Div}>
        <div className={classes.middle2Left}>
          <Typography variant={isHoveringLeft ? 'h3' : 'h3'} className={classes.middle2Leftwriting} onMouseOver={handleMouseOverLeft} onMouseOut={handleMouseOutLeft}>
            {isHoveringLeft ? 'purchase tickets online and save yourself a spot!' : 'TICKETEER'}
          </Typography>
        </div>
        <div className={classes.middle2Mid}>
          <Typography className={classes.middle2midwriting}>middle</Typography>
          <div onMouseOver={handleMouseOverMiddle} onMouseOut={handleMouseOutMiddle} className={classes.HoverText}>
            <Typography className={classes.middle2midbottomwriting}>middle bottom</Typography>
            {isHoveringMiddle && (
            <h2 className={commonclasses.FontSet}>shhhhhhh its a secret...</h2>
        )}
          </div>
        </div>
        <div className={classes.middle2Right}>
          <Typography className={classes.middle2Rightwriting}>rightside</Typography>
        </div>
      </div>



      <footer align='center'>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Typography variant='h5'> copyright © Ticketeer 2023 </Typography>
          <p>Alina Afghan 24491</p>
        </footer>

        
      </div>




    </CssBaseline>
  );
};

export default Ticketeer;
