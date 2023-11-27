import { CssBaseline,TextField,Typography,AppBar,Toolbar,Card,CardContent,CardMedia } from "@material-ui/core";
import React from "react";
import { Search } from '@material-ui/icons';
import Sidebar from "./Sidebar";
import EventPage_styles from "./EventPage_styles";
import useStyles from './styles';

const EventPage = () => {
  
  const classes = EventPage_styles();
  const commonclasses = useStyles();

    return(

      <CssBaseline>

        <div>

<AppBar className={commonclasses.Appbar}>
          <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
            <Sidebar></Sidebar>
            <Typography className={classes.header} variant="h4">Ticketeer</Typography>
            <div style={{ marginLeft: 'auto' }}>
              <Search></Search>
            </div>
            <TextField
              label='Search...'
              variant='outlined'
              InputProps={{
                style: {
                  borderRadius: "30px",
                  backgroundColor: '#FFFFFF',
                }
              }}
            ></TextField>
          </Toolbar>
        </AppBar>

        </div>

        <div className = {classes.middleDiv}>

          <Card>

            
          </Card>






        </div>





















        <footer align='center'>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Typography variant='h5'>  copyright © Ticketeer 2023 </Typography>
          <p>Alina Afghan 24491</p>
        </footer>

        

        

      </CssBaseline>
       
      
    )
}

export default EventPage;