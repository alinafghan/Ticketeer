import { makeStyles } from "@material-ui/core";

const loginStyles = makeStyles((theme) => ({



        Login_mainDiv: {
          height: '100%',
          width: '100%',
          fontSize: 0,
          display: 'flex', 
        },
        Login_LeftDiv: {
          display: 'inline-block',
          zoom: 1,
          verticalAlign: 'top',
          fontSize: '12px',
          width: '50%',
          backgroundColor: '#C1E1D2',
          height: '100vh',
          justifyContent: 'center',
          backgroundImage: 'URL(/fairytale.jpg)',
          backgroundSize: 'cover', // Adjust as needed
          backgroundPosition: 'center', // Adjust as needed
          backgroundRepeat: 'no-repeat',
        },

        Login_RightDiv: {
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          zoom: 1,
          verticalAlign: 'top',
          fontSize: '12px',
          width: '50%',
          backgroundColor: '#FFFFFF',
          height: '100vh',
        },

        cardContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '70%', 
            height: '95%', 
          },

          textField: {
            width: '100%', // Adjust the width as needed
            marginBottom: theme.spacing(2), // Adjust the margin as needed
        },



}));

export default loginStyles;