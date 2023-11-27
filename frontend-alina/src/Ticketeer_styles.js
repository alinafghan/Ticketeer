import { makeStyles} from "@material-ui/core";

const frontpageStyles = makeStyles((theme) => ({

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

      //ticketeer page 

      top:{
        opacity: '95%',
      },

    headerDiv:{
        paddingTop: 1,
        backgroundImage: 'url(/the_strokes.jpg)',
        backgroundSize: 'cover',
        textAlign: 'center',
    },

    FrontSidebar:{
        marginLeft: '94%',
        marginTop: 15,
    },


    logintitle:{
        fontFamily: "Krona one",
        color:'#000000',
        marginTop: '30%',
    },

    frontpageLine:{
        fontFamily: "Krona one",
        color:'#000000',
    },

    bodyDiv:{
        marginBottom: 40,
    },

    ButtonsDiv:{
        marginTop: '2%',
        alignContent: 'center',
        align: 'center',
        textAlign: 'center',
    },

    LoginButton:{
        backgroundColor:'#000000',
        color:'#FCFBF4',
        fontFamily: "Krona one",
        borderRadius: 30,
        padding: 20,
        position: 'relative'
    },

    RegisterButton:{
        backgroundColor:'#000000',
        color:'#FCFBF4',
        fontFamily: "Krona one",
        borderRadius: 30,
        padding:20,
        position: 'relative'
    },

    middleDiv:{
        marginTop: 40,
        marginLeft: '40%',
        marginBottom: 40,

    },

    middleDivWriting:{
        fontFamily: 'Krona one',
        marginBottom: 20,
    },

    middle2Div:{
        height: '100%',
        width:'100%',
        fontSize: 0,

    },
    middle2Right:{
        display: 'inline-block',
        //  *display: 'inline',
         zoom: 1, 
         verticalAlign: 'top',
         fontSize: '12px',
         width: '33%',
         backgroundColor: '#C1E1D2',
         height: '100vh',

    },

    middle2Rightwriting:{
        fontFamily: 'Krona one',
    },

    middle2Mid:{
        display: 'inline-block',
        //  *display: 'inline',
         zoom: 1, 
         verticalAlign: 'top',
         fontSize: '12px',
         width: '33%',
         height: '100vh',
         backgroundColor: '#FFD580',

    },

    middle2midwriting:{
        fontFamily: 'Krona one',

    },
    middle2Left:{
        display: 'inline-block',
        //  *display: 'inline',
         zoom: 1, 
         verticalAlign: 'top',
         fontSize: '12px',
         width: '33%',
         backgroundColor: '#0E2038',
         height: '100vh',

    },

    middle2Leftwriting:{
        fontFamily: 'Krona one',
    },

}));

export default frontpageStyles;

