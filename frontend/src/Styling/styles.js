import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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

  FontSet: {
    fontFamily: "Krona one",
  },

  Appbar: {
    backgroundColor: "#5EA3B3",
  },
}));

export default useStyles;
