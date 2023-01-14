import * as React from 'react';
import Auth from '../../utils/auth';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import ViewList from '@mui/icons-material/ViewList';
import Logout from '@mui/icons-material/Logout';
import ListAlt from '@mui/icons-material/ListAlt';
import WaterIcon from '@mui/icons-material/Water';
import PersonIcon from '@mui/icons-material/Person';

const data = [
  { icon: <ListAlt />, label: 'Work Orders' },
  { icon: <ViewList />, label: 'All Jobs' },
  { icon: <ViewList />, label: 'Daily Jobs' },
  { icon: <Logout />, label: 'Log Out' },
];

const NavList = styled(List)({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});
function CustomizedList() {
  const [menu] = React.useState(true);
  return (
    <Box sx={{ display: 'flex' }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: 'dark',
            primary: { main: 'rgb(102, 157, 246)' },
            background: { paper: 'rgb(5, 30, 52)' },
          },
        })}
      >
        <Paper elevation={0} sx={{ maxWidth: 256 }}>
          <NavList component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <WaterIcon color='primary' fontSize="small" />
              <ListItemText
                sx={{ my: 0 }}
                primary="SWARM"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: 'medium',
                  letterSpacing: 0,
                }}
              />
            </ListItemButton>
            <Divider />
            <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon>
                  <PersonIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="User"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                  }}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <Box>
              {menu &&
                data.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                  >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
          </NavList>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}


function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            {/* add links to dail job page and all jobs pages here */}
            <Link to="/dailyJobs">
              Daily Jobs
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/allJobs">
              All Jobs
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <div>
          {CustomizedList}
        </div>
      );
    }

    // return (
    //   <ul className="flex-row">
    //     <li className="mx-1">
    //       <Link to="/signup">
    //         Signup
    //       </Link>
    //     </li>
    //     <li className="mx-1">
    //       <Link to="/login">
    //         Login
    //       </Link>
    //     </li>
    //   </ul>
    //     // );
    //   }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          SWARM
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
