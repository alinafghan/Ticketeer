import { makeStyles } from "@material-ui/core";

const BookTicketPage_styles = makeStyles((theme) => ({
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

  middleDiv: {
    marginTop: 200,
    justifyContent: "center",
    width: "70%",
    height: "80%",

    // flexDirection: "column",
    // alignItems: "center",
  },

  ButtonDiv: {
    justifyContent: "center",
    display: "flex",
  },

  formField: {
    justifyContent: "center",
    display: "flex",
    paddingBottom: 30,
  },

  Button: {
    marginTop: 40,
    backgroundColor: "#000000",
    color: "#FCFBF4",
    fontFamily: "Krona one",
    borderRadius: 30,
    padding: 20,
    position: "relative",
  },
}));

export default BookTicketPage_styles;
