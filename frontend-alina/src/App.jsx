import React from 'react';
import {Typography,AppBar,Button,TextField,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar, Container} from '@material-ui/core';
import {PhotoCamera} from '@material-ui/icons';
import{Search} from '@material-ui/icons';
import useStyles from './styles';

const App = () => {

    const classes = useStyles();

    return(

        <>
         

        <CssBaseline>

            <AppBar className = {classes.Appbar}>

                <Toolbar style = {{display : 'flex', justifyContent : 'center'}}>
                <Typography variant = "h3"> Ticketeer</Typography>

                <div style = {{ marginLeft: 'auto' }}>
    
                   <Search className = {classes.Search} ></Search>  

                   </div>

                    {/* {{marginLeft: 'Auto'}} */}

                    <TextField label = 'Search...' variant = 'outlined' color = 'secondary'></TextField>
                   
                    
                </Toolbar>
            </AppBar>

            
            <br></br>
<br></br>
<br></br>


            <main>

                <div>

                    <Container>
                        <Typography variant = 'h5'  color = 'textPrimary' gutterBottom>

                            Happening soon at a location near you! <a href = "/"> Change location</a>

                        </Typography>
                    </Container>


                    <br></br>
<br></br>
<br></br>
<br></br>


                    <div>
                        <Grid container spacing = {9} justify = 'center'>
                            <Grid item>
                                <Button variant = 'contained'>

                                    <Typography variant = 'p'> Event name</Typography>

                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant = 'contained'>
                                <Typography variant = 'p'> Event name</Typography>
                                    
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant = 'contained'>
                                <Typography variant = 'p'> Event name</Typography>
                                    
                                </Button>
                            </Grid>

                            <Grid item>
                                <Button variant = 'contained'>
                                <Typography variant = 'p'> Event name</Typography>
                                    
                                </Button>
                            </Grid>

                            <Grid item>
                                <Button variant = 'contained'>
                                <Typography variant = 'p'> Event name</Typography>
                                    
                                </Button>
                            </Grid>
                        </Grid>



<br></br>
<br></br>
<br></br>
<br></br>


                        <Grid container spacing = {9} justify = 'center'>
                            <Grid item>
                                <Button variant = 'contained'>

                                    <Typography variant = 'p'> Event name</Typography>

                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant = 'contained'>
                                <Typography variant = 'p'> Event name</Typography>
                                    
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant = 'contained'>
                                <Typography variant = 'p'> Event name</Typography>
                                    
                                </Button>
                            </Grid>

                            <Grid item>
                                <Button variant = 'contained'>
                                <Typography variant = 'p'> Event name</Typography>
                                    
                                </Button>
                            </Grid>

                            <Grid item>
                                <Button variant = 'contained'>
                                <Typography variant = 'p'> Event name</Typography>
                                    
                                </Button>
                            </Grid>
                        </Grid>


                        <br></br>
<br></br>
<br></br>
<br></br>


                        <Grid container spacing = {9} justify = 'center'>
                            <Grid item>
                                <Button variant = 'contained'>

                                    <Typography variant = 'p'> Event name</Typography>

                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant = 'contained'>
                                <Typography variant = 'p'> Event name</Typography>
                                    
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant = 'contained'>
                                <Typography variant = 'p'> Event name</Typography>
                                    
                                </Button>
                            </Grid>

                            <Grid item>
                                <Button variant = 'contained'>
                                <Typography variant = 'p'> Event name</Typography>
                                    
                                </Button>
                            </Grid>

                            <Grid item>
                                <Button variant = 'contained'>
                                <Typography variant = 'p'> Event name</Typography>
                                    
                                </Button>
                            </Grid>
                        </Grid>


                    </div>

                </div>
            </main>
        </CssBaseline>
        
        </>
    )
}

export default App;