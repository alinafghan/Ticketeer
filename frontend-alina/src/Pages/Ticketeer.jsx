import React, { useState, useEffect } from "react";
import { Typography, CssBaseline, Button, Divider } from "@material-ui/core";
import frontpageStyles from "../Styling/Ticketeer_styles";
import FrontSideBar from "../Components/FrontSidebar";
import useStyles from "../Styling/styles";

const Ticketeer = () => {
  const classes = frontpageStyles();
  const commonclasses = frontpageStyles();

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

  const image1 = require("../carousel/carousel1.jpg");
  const image2 = require("../carousel/carousel2.jpg");
  const image3 = require("../carousel/carousel3.jpg");
  const image4 = require("../carousel/carousel4.jpg");
  const image5 = require("../carousel/carousel5.jpg");

  const images = [
    { src: image1, caption: "Book tickets for concerts" },
    { src: image2, caption: "Book tickets for football games" },
    { src: image3, caption: "Book tickets for seminars" },
    { src: image4, caption: "Book tickets for conventions" },
    { src: image5, caption: "Book tickets for movies" },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [currentImageIndex, images]);

  return (
    <CssBaseline>
      <div className={classes.Ticketeer}>
        <div className={classes.headerDiv}>
          <div className={classes.hibasCarousel}>
            <img
              src={images[currentImageIndex].src}
              alt="Carousel image"
              style={{
                height: "80vh",
                width: "100%",
                paddingTop: 0,
                marginTop: 0,
              }}
            />

            <Typography
              className={classes.logintitle}
              variant="h1"
              style={{
                position: "inherit",
                bottom: "0px",
                color: "white",
              }}
            >
              TICKETEER
            </Typography>
            <Typography
              className={classes.frontpageLine}
              variant="h4"
              style={{
                position: "inherit",
                bottom: "0px",
                color: "white",
              }}
            >
              Buy your tickets now, wherever, whenever
            </Typography>

            <div className={classes.FrontSidebar}>
              <FrontSideBar></FrontSideBar>
            </div>

            {/* <Typography
              className={classes.carouselCaption}
              variant="h2"
              style={{
                position: "inherit",
                color: "black",
                marginTop: "-95px",
              }}
            >
              {images[currentImageIndex].caption}
            </Typography> */}
          </div>
        </div>
        <div className={classes.bodyDiv}>
          <div className={classes.ButtonsDiv}>
            <a href="/login">
              <Button className={classes.LoginButton}>LOGIN</Button>
            </a>
            <br></br>
            <br></br>
            <a href="/register">
              <Button className={classes.RegisterButton}>REGISTER</Button>
            </a>
          </div>
        </div>
        <Divider variant="middle"></Divider>
        <div className={classes.middleDiv}>
          <Typography variant="h4" className={classes.middleDivWriting}>
            We believe that in a world where people have become numbers, a
            personal approach is key to ensure you get the most out of your
            customer experience.
          </Typography>
        </div>
        <div className={classes.middle2Div}>
          <div
            onMouseOver={handleMouseOverLeft}
            onMouseOut={handleMouseOutLeft}
            className={classes.middle2Left}
          >
            <Typography
              variant={isHoveringLeft ? "h3" : "h3"}
              className={classes.middle2Leftwriting}
            >
              {isHoveringLeft
                ? "purchase tickets online and save yourself a spot!"
                : " "}
            </Typography>
          </div>
          <div
            onMouseOver={handleMouseOverMiddle}
            onMouseOut={handleMouseOutMiddle}
            className={classes.middle2Mid}
          >
            <Typography className={classes.middle2midwriting}></Typography>
            <div className={classes.HoverText}>
              <Typography className={classes.middle2midbottomwriting}>
                Want to buy a ticket?
              </Typography>
              {isHoveringMiddle && (
                <h2 className={commonclasses.FontSet}>
                  You're in the right place!
                </h2>
              )}
            </div>
          </div>
          <div className={classes.middle2Right}>
            <Typography className={classes.middle2Rightwriting}></Typography>
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
      </div>
    </CssBaseline>
  );
};

export default Ticketeer;
