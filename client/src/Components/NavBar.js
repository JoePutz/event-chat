import React, { useState } from "react";
// import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { NavLink, Link } from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../Context/User"


//drawer elements used
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
// import Divider from "@mui/material/Divider";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import FolderIcon from "@mui/icons-material/Folder";
import HomeIcon from '@mui/icons-material/Home';
import CircleIcon from '@mui/icons-material/Circle';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import LogoutIcon from '@mui/icons-material/Logout';
// import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";


function NavBar({  }) {
  //react useState hook to save the current open/close state of the drawer, normally variables dissapear afte the function was executed
  const [open, setState] = useState(false);
  const {user, logout} = useContext(UserContext)


  //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };

  function handleLogout() {
    logout()
}

  return (
    <AppBar position="static" sx={{backgroundColor: "#2d433c"}}>
      
        <Toolbar >
          <IconButton
            style={{color:"#eff0f2", backgroundColor: "#2d433c"}}
            anchor="left"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            // sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Container >
          <Typography variant="h3" sx={{ color:"#eff0f2", m: 2,flexGrow: 1, fontWeight: 900 }}>
            Event Chat
          </Typography>
          </Container>

          {/* The outside of the drawer */}
          <Drawer
            //from which side the drawer slides in
            anchor="left"
            //if open is true --> drawer is shown
            open={open}
            //function that is called when the drawer should close
            onClose={toggleDrawer(false)}
            //function that is called when the drawer should open
            onOpen={toggleDrawer(true)}
          >
            {/* The inside of the drawer */}
            <Box
              sx={{
                p: 8,
                height: 1,
                backgroundColor: "#2d433c"
              }}
            >
              {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
              <IconButton sx={{ mb: 1, width: 1 }} >
                <CloseIcon onClick={toggleDrawer(false)} style={{color:"#eff0f2", backgroundColor: "#2d433c"}} />
              </IconButton>

              {/* <Divider sx={{ mb: 2 }} /> */}
              <br />
              <br />
              <br />

              <Box sx={{ mb: 2, width: 1 }}>

                <NavLink end to="/">
                  <Button 
                    variant="outlined" 
                    style={{backgroundColor:"#eff0f2", color: "#2d433c"}} 
                    sx={{ mb: 1, width: 1 }} 
                    startIcon={<HomeIcon sx={{ color: "#2d433c" }} />}
                    >
                    HOME
                  </Button>
                </NavLink>

                <br />

                <NavLink end to="/events">
                  <Button 
                    variant="outlined" 
                    style={{backgroundColor:"#eff0f2", color: "#2d433c"}} 
                    sx={{ mb: 1, width: 1 }} 
                    startIcon={<CircleIcon sx={{ color: "#2d433c" }} />}
                    >
                    ONGOING EVENTS
                  </Button>
                </NavLink>

                <br />

                <NavLink end to="/create-event">
                  <Button 
                    variant="outlined" 
                    style={{backgroundColor:"#eff0f2", color: "#2d433c"}} 
                    sx={{ mb: 1, width: 1 }} 
                    startIcon={<CircleIcon sx={{ color: "#2d433c" }} />}
                    >
                    CREATE AN EVENT
                  </Button>
                </NavLink>

                <br />
                  <>
                    {user ? null: 
                      <Link to="signup">
                        <Button 
                          variant="outlined" 
                          style={{backgroundColor:"#eff0f2", color: "#2d433c"}} 
                          sx={{ mb: 1, width: 1 }} 
                          startIcon={<DriveFileRenameOutlineIcon sx={{ color: "#2d433c" }} />}
                          >
                          SIGN UP
                        </Button>
                      </Link>
                    }
                    <br />
                    {user ? (
                        <Button 
                          variant="outlined" 
                          style={{backgroundColor:"#eff0f2", color: "#2d433c"}} 
                          sx={{ mb: 1, width: 1 }}  
                          startIcon={<LogoutIcon sx={{ color: "#2d433c" }} />}
                          onClick={handleLogout}
                          >
                          Logout
                        </Button>
                      ) : (
                        <Link to="/login">
                            <Button 
                              variant="outlined" 
                              style={{backgroundColor:"#eff0f2", color: "#2d433c"}} 
                              sx={{ mb: 1, width: 1 }} 
                              startIcon={<FingerprintIcon sx={{ color: "#2d433c" }} />}
                              >
                              Login
                            </Button>
                        </Link>
                      )
                    }
                  </>
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      {/* </Container> */}
    </AppBar>
  );
}

export default NavBar