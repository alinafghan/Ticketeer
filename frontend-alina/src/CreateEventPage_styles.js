import { makeStyles } from "@material-ui/core";

const CreateEventPage_styles = makeStyles((theme) => ({

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


      middleDiv:{
        marginTop: 200,
        justifyContent: 'center',


        display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
      },

      Card:{
        display: 'flex',
        width: '70%',
        height: '90%',
        // alignItems: 'center',
      },

      // CardLeft:{
      //   display: 'inline-block',
      //   width: '44%',
      //   verticalAlign: 'top',
      // },

      CardRight:{
        // display: 'inline-block',
        // width: '100%',
        // verticalAlign: 'top',
        // alignItems: 'center',
      },
      
}));


export default CreateEventPage_styles;