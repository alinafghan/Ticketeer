import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  CssBaseline,
  TextField,
  Typography,
  AppBar,
  Toolbar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import Sidebar from "../Sidebar";
import EventPage_styles from "../Styling/EventPage_styles";
import useStyles from "../Styling/styles";

const EventPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    
    fetch(`http://localhost:3005//events//findEventfromID?event_id=${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        condition: `event_id = ${eventId}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => setEvent(data))
      .catch((error) => console.log(error));
  }, [eventId]);

  const classes = EventPage_styles();
  const commonclasses = useStyles();

  return (
    <CssBaseline>
      <div>
        <AppBar className={commonclasses.Appbar}>
        <Toolbar style={{ display: "flex", justifyContent: "center" }}>
        <Sidebar></Sidebar>
        <Typography className={classes.header} variant="h4">
          Ticketeer
        </Typography>
        <div style={{ marginLeft: "auto" }}>
          <Search></Search>
        </div>
        <TextField
          label="Search..."
          variant="outlined"
          InputProps={{
            style: {
              borderRadius: "30px",
              backgroundColor: "#FFFFFF",
            },
          }}
        ></TextField>
      </Toolbar>
        </AppBar>
      </div>

      <div className={classes.middleDiv}>
        {event && (
          <Card 
             className={classes.Card} 
             sx={{ maxWidth: 150, height: 200 }} 
             elevation={9}
             >
           
             <div className={classes.CardLeft}>
             <CardMedia
               component="img"
               sx={{ height: 100, width: 200 }}
               src={event.image}
               title="event_icon"
             />
           </div>

           <div className={classes.CardRight}>
             <CardContent>
               <CardActions>
                 <Typography variant="h5">{event.name}</Typography>

                 <Typography variant="h5">{event.date}</Typography>

                 <Typography variant="h5">{event.venue}</Typography>

                 <Typography variant="h5">{event.performer}</Typography>
               </CardActions>

               <div className={classes.ButtonDiv}>
                 <a href="./book">
                   <Button className={classes.Button}>BOOK TICKET</Button>
                 </a>
               </div>
             </CardContent>
           </div>
          </Card>
        )}
      </div>

      <footer align="center">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Typography variant="h5"> copyright © Ticketeer 2023 </Typography>
      <p>Alina Afghan 24491</p>
      </footer>
    </CssBaseline>
  );
};
export default EventPage;
