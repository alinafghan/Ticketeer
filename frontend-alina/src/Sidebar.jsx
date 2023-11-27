import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import {Menu} from '@material-ui/icons';
import {IconButton} from '@material-ui/core';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function TemporaryDrawer() {

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {

    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });

  };

  const list = (anchor) => (

    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>



      <ListItem key = 'someTask' disablePadding>


<ListItemButton>

  <ListItemIcon>
  <AddCircleOutlineIcon></AddCircleOutlineIcon>
  </ListItemIcon>

  <ListItemText primary='Task1' />
</ListItemButton>

</ListItem>

<ListItem key = 'Task2' disablePadding>

<ListItemButton>

  <ListItemIcon>
  <AddCircleOutlineIcon></AddCircleOutlineIcon>
  </ListItemIcon>

  <ListItemText primary='Task2'/>
</ListItemButton>

</ListItem>
<ListItem key = 'Task3' disablePadding>

<ListItemButton>

  <ListItemIcon>
  <AddCircleOutlineIcon></AddCircleOutlineIcon>
  </ListItemIcon>

  <ListItemText primary='Task3'/>
</ListItemButton>

</ListItem>
<ListItem key = 'Task4' disablePadding>

<ListItemButton>

  <ListItemIcon>
  <AddCircleOutlineIcon></AddCircleOutlineIcon>
  </ListItemIcon>

  <ListItemText primary='Task4'/>
</ListItemButton>

</ListItem>






      </List>


      <Divider />


      <List> 


          <ListItem key = 'settings' disablePadding>


            <ListItemButton>

              <ListItemIcon>
                <SettingsIcon /> 
              </ListItemIcon>

              <ListItemText primary='Settings' />
            </ListItemButton>

            </ListItem>

            <ListItem key = 'logout' disablePadding>

            <ListItemButton>

              <ListItemIcon>
                <LogoutIcon /> 
              </ListItemIcon>

              <ListItemText primary='Log out'/>
            </ListItemButton>

          </ListItem>

        
        
        
      </List>


    </Box>
  );

  return (
    <div>

      {[''].map((anchor) => (

        <React.Fragment key={anchor}>
          <IconButton  size="large"
            edge="start"
            color = 'inherit'
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(anchor, true)}>{anchor}<Menu/></IconButton>

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

