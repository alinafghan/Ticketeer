import React from 'react';
import {Typography,AppBar,Button,IconButton,TextField,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar, Container} from '@material-ui/core';
import {PhotoCamera} from '@material-ui/icons';
import{Search} from '@material-ui/icons';
import useStyles from './styles';
import {Menu} from '@material-ui/icons';

const App = () => {

    const classes = useStyles();

    return(

        <>

        <CssBaseline>

            <AppBar className = {classes.Appbar}>

                <Toolbar style = {{display : 'flex', justifyContent : 'center'}}>

                <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu/>
          </IconButton>


                <Typography className = {classes.header} variant = "h4">    Ticketeer</Typography>

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

                             <Typography className = {classes.filter} variant = 'p'>Filter by:</Typography> <a href = "/"> date</a>

                        </Typography>

                        {/* <div className = {classes.right2}>
                            
                            <div className = {classes.date}> 
                            <Typography variant = 'p'>Filter by:</Typography> <a href = "/"> date</a>
                            </div></div> */}
            
          
            
            
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