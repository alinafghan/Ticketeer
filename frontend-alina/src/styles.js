import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

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

    Appbar:{
        backgroundColor :  '#008080',
        position : 'relative'
    },

    header:{
        font: "Krona one",
        padding : 15,
    },

    filter:{
        marginRight: 'auto',
    },

    Container:{
        display: 'flex',
    },

    Search:{
        
    }



    // Search:{
    //     backgroundColor : theme.palette.background.paper
    // }

}));





export default useStyles;