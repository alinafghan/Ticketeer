import { makeStyles } from "@material-ui/core";

const CreateEventPage_styles = makeStyles((theme) => ({
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

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  Card: {
    display: "flex",
    width: "70%",
    height: "200%",
  },

  cardContainer: {
    display: "flex",
    gap: 16, // Adjust the gap as needed
    justifyContent: "center", // Optional: Center the cards horizontally
  },
  EventCard: {
    flex: 1, // Allow the cards to grow and fill the available space
    maxWidth: 500,
    // Add any other styles you need for the cards
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

export default CreateEventPage_styles;
