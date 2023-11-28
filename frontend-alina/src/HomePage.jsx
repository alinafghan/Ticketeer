import React, { useEffect, useState } from 'react';
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  AppBar,
  Button,
  TextField,
  CssBaseline,
  Grid,
  Toolbar,
  CardActionArea,
} from '@material-ui/core';
import Sidebar from './Sidebar';
import { Search } from '@material-ui/icons';
import HomePage_styles from './HomePage_styles';
import useStyles from './styles';
import api from './api';

const HomePage = () => {



  const [events, setEvents] = useState([]);
  const classes = HomePage_styles();
  const commonclasses = useStyles();

  useEffect(() => {
    api.get('/events/GetWholeTable')
      .then(response => {
        console.log('API Data:', response.data);
        console.log('something something');// Log only the data
        setEvents(response.data);
      })
      .catch(error => {
        console.error('API Error:', error);
      });
  }, []);

  return (
    <>
      <CssBaseline>
        <div>
          <AppBar className={commonclasses.Appbar}>
            <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
              <Sidebar></Sidebar>
              <Typography variant="h4">Ticketeer</Typography>
              <div style={{ marginLeft: 'auto' }}>
                <Search></Search>
              </div>
              <TextField
                label='Search...'
                variant='outlined'
                InputProps={{
                  style: {
                    borderRadius: '30px',
                    backgroundColor: '#FFFFFF',
                  },
                }}
              ></TextField>
            </Toolbar>
          </AppBar>
        </div>

        <br></br>
        <br></br>
        <br></br>

        <main className={classes.main}>
          <div className={classes.HomeTop}>
            <div className={classes.parent}>
              <div className={classes.one}>
                <Typography variant='h5' color='textPrimary' gutterBottom>
                  Happening soon at a location near you!{' '}
                  <a href="/"> Change location</a>
                </Typography>
              </div>
              <div className={classes.two}>
                <Typography className={classes.filter} variant='p'>
                  Filter by: <a href="/"> date</a>
                </Typography>
              </div>
            </div>
          </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div className={classes.gridContainer}>
            <Grid container spacing={9} justify='center'>
              {events.map(event => (
                <Grid key={event.event_id} item xs={12} sm={3}>
                  <Card sx={{ maxWidth: 340 }}>
                    <CardActionArea>
                      <CardMedia
                        sx={{ height: 180 }}
                        image="/the_strokes.jpg"
                        title="event_icon"
                      />
                      <CardContent>
                        <CardActions>
                          <Button size="big">{event[1]}</Button>
                          <Button size="big">{event[2]}</Button>
                          <Button size="big">{event[3]}</Button>
                        </CardActions>
                        <Typography variant="body" color="text.secondary">
                          short event description here
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </main>

        <footer align='center'>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Typography variant='h5'> copyright © Ticketeer 2023 </Typography>
          <p>Alina Afghan 24491</p>
        </footer>
      </CssBaseline>
    </>
  );
}

export default HomePage;
