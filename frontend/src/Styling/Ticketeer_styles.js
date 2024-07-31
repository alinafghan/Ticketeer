import { makeStyles } from "@material-ui/core";

const frontpageStyles = makeStyles((theme) => ({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Krona one"',
    ].join(","),
  },

  //ticketeer page
  Ticketeer: {
    backgroundColor: theme.palette.background.paper,
  },

  headerDiv: {
    paddingTop: 1,
    backgroundSize: "cover",
    textAlign: "center",
    backgroundColor: theme.palette.background.paper,
    height: "100vh",
    marginTop: 0,
    marginBottom: "-100px",
  },

  FrontSidebar: {
    position: "absolute",
    top: "10px", // Adjust this value based on your layout
    right: "10px", // Adjust this value based on your layout
  },

  logintitle: {
    fontFamily: "Krona one",
    marginTop: "-200px",
  },

  frontpageLine: {
    fontFamily: "Krona one",
    padding: 15,
    marginBottom: 30,
  },

  bodyDiv: {
    marginBottom: 20,
    backgroundColor: theme.palette.background.paper,
  },

  ButtonsDiv: {
    alignContent: "center",
    align: "center",
    textAlign: "center",
    backgroundColor: theme.palette.background.paper,
  },

  LoginButton: {
    backgroundColor: "#000000",
    color: "#FCFBF4",
    fontFamily: "Krona one",
    borderRadius: 30,
    padding: 20,
    position: "relative",
  },

  RegisterButton: {
    backgroundColor: "#000000",
    color: "#FCFBF4",
    fontFamily: "Krona one",
    borderRadius: 30,
    padding: 20,
    position: "relative",
  },

  middleDiv: {
    marginTop: 40,
    marginLeft: "45%",
    marginBottom: 40,
    backgroundColor: theme.palette.background.paper,
  },

  middleDivWriting: {
    fontFamily: "Krona one",
    marginBottom: 20,
  },

  middle2Div: {
    height: "100%",
    width: "100%",
    fontSize: 0,
  },

  middle2Right: {
    display: "inline-block",

    zoom: 1,
    verticalAlign: "top",
    fontSize: "12px",
    width: "33%",
    backgroundColor: "#C1E1D2",
    backgroundImage: "url(standup.jpg)",
    backgroundSize: "cover",
    height: "100vh",
  },

  middle2Rightwriting: {
    fontFamily: "Krona one",
  },

  middle2Mid: {
    display: "inline-block",

    zoom: 1,
    verticalAlign: "top",
    fontSize: "12px",
    width: "33%",
    height: "100vh",
    backgroundImage: "url(fb.jpg)",
    backgroundSize: "cover",
    backgroundColor: "#FFD580",
    justifyContent: "center",
  },

  middle2midwriting: {
    fontFamily: "Krona one",
  },

  middle2midbottomwriting: {
    fontFamily: "Krona one",
    marginTop: "150%",
    color: "white",
  },
  middle2Left: {
    display: "inline-block",
    zoom: 1,
    verticalAlign: "top",
    fontSize: "12px",
    width: "33%",
    backgroundColor: "#0E2038",
    height: "100vh",
    backgroundImage: "url(conc.jpg)",
    backgroundSize: "cover",
  },

  middle2Leftwriting: {
    fontFamily: "Krona one",
    marginTop: 140,
    marginLeft: 40,
  },

  middle2LeftHoverwriting: {
    fontFamily: "Krona one",
  },

  hibasCarousel: {
    fontFamily: "Krona one",
    marginTop: 0,
    paddingTop: 0,
    position: "relative",
    marginBottom: 0,
  },
}));

export default frontpageStyles;
