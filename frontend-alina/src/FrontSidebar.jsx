import * as React from 'react';
import {Menu,Settings,ExitToApp} from '@material-ui/icons';
import {IconButton,Box,Drawer,List,Divider,ListItem,ListItemIcon,ListItemText} from '@material-ui/core';

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



      <ListItem key = 'someTask' disablePadding>


{/* <ListItemButton> */}

  <ListItemIcon>
  <Menu></Menu>
  </ListItemIcon>

  <ListItemText primary='Task1' />
{/* </ListItemButton> */}

</ListItem>

<ListItem key = 'Task2' disablePadding>

{/* <ListItemButton> */}

  <ListItemIcon>
  <Menu></Menu>
  </ListItemIcon>

  <ListItemText primary='Task2'/>
{/* </ListItemButton> */}

</ListItem>
<ListItem key = 'Task3' disablePadding>

{/* <ListItemButton> */}

  <ListItemIcon>
  <Menu></Menu>
  </ListItemIcon>

  <ListItemText primary='Task3'/>
{/* </ListItemButton> */}

</ListItem>
<ListItem key = 'Task4' disablePadding>

{/* <ListItemButton> */}

  <ListItemIcon>
  <Menu></Menu>
  </ListItemIcon>

  <ListItemText primary='Task4'/>
{/* </ListItemButton> */}

</ListItem>



      </List>


      <Divider />


      <List> 


          <ListItem key = 'settings' disablePadding>


            {/* <ListItemButton> */}

              <ListItemIcon>
                <Settings /> 
              </ListItemIcon>

              <ListItemText primary='Settings' />
            {/* </ListItemButton> */}

            </ListItem>

            <ListItem key = 'logout' disablePadding>

            {/* <ListItemButton> */}

              <ListItemIcon>
                <ExitToApp /> 
              </ListItemIcon>

              <ListItemText primary='Log out'/>
            {/* </ListItemButton> */}

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
  color = 'inherit'
//   style={{ color: '#FFFFFF' }}
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

