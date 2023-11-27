import React from 'react';
import {Typography,Card,CardActions,CardContent,CardMedia,AppBar,Button,TextField,CssBaseline,Grid,Toolbar, Container, CardActionArea} from '@material-ui/core';
import{Search} from '@material-ui/icons';
import useStyles from './styles';
import Sidebar from './Sidebar'

const HomePage = () => {

    const classes = useStyles();

    return(

        <>

        <CssBaseline>

            <AppBar className = {classes.Appbar}>

                <Toolbar style = {{display : 'flex', justifyContent : 'center'}}>

                <Sidebar>

                 </Sidebar>

                <Typography className = {classes.header} variant = "h4">Ticketeer</Typography>

                <div style = {{ marginLeft: 'auto' }}>
    
                   <Search ></Search>  

                   </div>


                    <TextField label = 'Search...' variant = 'outlined' InputProps={{
    style: {
      borderRadius: "30px",
      backgroundColor: '#FFFFFF',
    }
  }}>       </TextField>
                   
                    
                </Toolbar>
            </AppBar>

            
            <br></br>
<br></br>
<br></br>


            <main className = {classes.main}>

                <div>

                    <Container style = {{display : 'flex'}}>
                        <Typography variant = 'h5'  color = 'textPrimary' gutterBottom>

                            Happening soon at a location near you! <a href = "/"> Change location</a>

                            </Typography>

                             <Typography className = {classes.filter} variant = 'p'>Filter by: <a href = "/"> date</a></Typography>

                    </Container>


                    <br></br>
<br></br>
<br></br>
<br></br>


                    <div>
                        <Grid container spacing = {9} justify = 'center'>

                            <Grid item>

                        <Card sx={{ maxWidth: 340 }}>
                            <CardActionArea>
                            <CardMedia
                                       sx={{ height: 180 }}
                                       image="fairytale.jpg"
                                        title="event_icon"
                                        />
                           <CardContent>
                           <CardActions>
                         <Button size="big">Event Name</Button>
                         <Button size="big">Venue</Button>
                         <Button size="big">Date</Button>
                            </CardActions>
                                   {/* <Typography gutterBottom variant="h5" component="div">
                                               Event Name - Venue - Date
                                   </Typography> */}
                                 <Typography variant="body" color="text.secondary">
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales sollicitudin mi eget semper. 
                                 Suspendisse eget nisi quis tortor ultrices congue vel vel lorem. Maecenas ac ex urna. 
                                    </Typography>
                           </CardContent>
                           </CardActionArea>
                           </Card>

                           </Grid>


                           <Grid item>

<Card sx={{ maxWidth: 340 }}>
    <CardActionArea>
    <CardMedia
               sx={{ height: 180}}
               image="the_strokes.jpg"
                title="event_icon"
                />
   <CardContent>
   <CardActions>
 <Button size="big">Event Name</Button>
 <Button size="big">Venue</Button>
 <Button size="big">Date</Button>
    </CardActions>
           {/* <Typography gutterBottom variant="h5" component="div">
                       Event Name - Venue - Date
           </Typography> */}
         <Typography variant="body" color="text.secondary">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales sollicitudin mi eget semper. 
         Suspendisse eget nisi quis tortor ultrices congue vel vel lorem. Maecenas ac ex urna. 
            </Typography>
   </CardContent>
   </CardActionArea>
   </Card>

   </Grid>
   <Grid item>

<Card sx={{ maxWidth: 340 }}>
    <CardActionArea>
    <CardMedia
               sx={{ height: 180 }}
               image="the_strokes.jpg"
                title="event_icon"
                />
   <CardContent>
   <CardActions>
 <Button size="big">Event Name</Button>
 <Button size="big">Venue</Button>
 <Button size="big">Date</Button>
    </CardActions>
           {/* <Typography gutterBottom variant="h5" component="div">
                       Event Name - Venue - Date
           </Typography> */}
         <Typography variant="body" color="text.secondary">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales sollicitudin mi eget semper. 
         Suspendisse eget nisi quis tortor ultrices congue vel vel lorem. Maecenas ac ex urna. 
            </Typography>
   </CardContent>
   </CardActionArea>
   </Card>

   </Grid>

   </Grid>


<br></br>
<br></br>
<br></br>
<br></br>


                        <Grid container spacing = {9} justify = 'center'>
                        <Grid item>

<Card sx={{ maxWidth: 340 }}>
    <CardActionArea>
    <CardMedia
               sx={{ height: 180 }}
               image="the_strokes.jpg"
                title="event_icon"
                />
   <CardContent>
   <CardActions>
 <Button size="big">Event Name</Button>
 <Button size="big">Venue</Button>
 <Button size="big">Date</Button>
    </CardActions>
           {/* <Typography gutterBottom variant="h5" component="div">
                       Event Name - Venue - Date
           </Typography> */}
         <Typography variant="body" color="text.secondary">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales sollicitudin mi eget semper. 
         Suspendisse eget nisi quis tortor ultrices congue vel vel lorem. Maecenas ac ex urna. 
            </Typography>
   </CardContent>
   </CardActionArea>
   </Card>

   </Grid> <Grid item>

<Card sx={{ maxWidth: 340 }}>
    <CardActionArea>
    <CardMedia
               sx={{ height: 180 }}
               image="the_strokes.jpg"
                title="event_icon"
                />
   <CardContent>
   <CardActions>
 <Button size="big">Event Name</Button>
 <Button size="big">Venue</Button>
 <Button size="big">Date</Button>
    </CardActions>
           {/* <Typography gutterBottom variant="h5" component="div">
                       Event Name - Venue - Date
           </Typography> */}
         <Typography variant="body" color="text.secondary">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales sollicitudin mi eget semper. 
         Suspendisse eget nisi quis tortor ultrices congue vel vel lorem. Maecenas ac ex urna. 
            </Typography>
   </CardContent>
   </CardActionArea>
   </Card>

   </Grid> <Grid item>

<Card sx={{ maxWidth: 340 }}>
    <CardActionArea>
    <CardMedia
               sx={{ height: 180 }}
               image="the_strokes.jpg"
                title="event_icon"
                />
   <CardContent>
   <CardActions>
 <Button size="big">Event Name</Button>
 <Button size="big">Venue</Button>
 <Button size="big">Date</Button>
    </CardActions>
           {/* <Typography gutterBottom variant="h5" component="div">
                       Event Name - Venue - Date
           </Typography> */}
         <Typography variant="body" color="text.secondary">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales sollicitudin mi eget semper. 
         Suspendisse eget nisi quis tortor ultrices congue vel vel lorem. Maecenas ac ex urna. 
            </Typography>
   </CardContent>
   </CardActionArea>
   </Card>

   </Grid>
                        </Grid>

                       


                    </div>

                </div>
            </main>


           <footer align = 'center'>

           <br></br>
<br></br>
<br></br>
<br></br>


                <Typography variant = 'h5'>  copyright © Ticketeer 2023 </Typography>
                <p>Alina Afghan 24491</p>


                </footer>
          
        </CssBaseline>
        
        </>
    )
}

export default HomePage;