import * as React from 'react';
import {Menu,Settings,ExitToApp} from '@material-ui/icons';
import {IconButton,Box,Drawer,List,Divider,ListItem,ListItemIcon,ListItemText} from '@material-ui/core';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom

export default function TemporaryDrawer() {

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {

    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });

  };

  const list = (anchor) => (

    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 500 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>

        <ListItem key='Home' disablePadding>
          <ListItemIcon>
            <Menu></Menu>
          </ListItemIcon>
          <ListItemText primary={<Link to="/home">Home</Link>} /> {/* */}
        </ListItem>

        <ListItem key='Search' disablePadding>
          <ListItemIcon>
            <Menu></Menu>
          </ListItemIcon>
          <ListItemText primary='Search' />
        </ListItem>

    
        <ListItem key='Events Near You' disablePadding>
          <ListItemIcon>
            <Menu></Menu>
          </ListItemIcon>
          <ListItemText primary={<Link to="/home">Events Near You</Link>} /> {/* */}
        </ListItem>
      </List>

      <Divider />

      <List> 

        <ListItem key='settings' disablePadding>
          <ListItemIcon>
            <Settings /> 
          </ListItemIcon>
          <ListItemText primary='Settings' />
        </ListItem>

        <ListItem key='logout' disablePadding>
          <ListItemIcon>
            <ExitToApp /> 
          </ListItemIcon>
          <ListItemText primary={<Link to="/login">Log out</Link>} /> {/* Use the Link component to create a link to the login page */}
        </ListItem>

      </List>

    </Box>
  );

  return (
    <div>

      {['right'].map((anchor) => (

        <React.Fragment key={anchor}>

          <IconButton
            size="large"
            edge="start"
            color='inherit'
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(anchor, true)}
          >
            <Menu></Menu>
          </IconButton>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
