import { makeStyles } from "@material-ui/core";

const HomePage_styles = makeStyles((theme) => ({

    typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Krona one"',
        ].join(','),
      },

      HomeTop:{
        marginTop: 50,
      },

      parent:{
        display: 'flex',
        justifyContent: 'space-between'

      },

      one:{
        display: 'inline-block',
        marginLeft: 30,
      },

      two:{
        display: 'inline-block',
        marginRight: 50,
      }




}));


export default HomePage_styles;




   