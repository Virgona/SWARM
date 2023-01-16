import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LinearProgress from '@mui/material/LinearProgress';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';


const NoMatch = () => {

  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);


  return (
    <Container maxWidth="60%" sx={{ mt: 6 }}>
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
        <Paper sx={{ bgcolor: '#', width: '40%', ml: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography sx={{ mt: 4, mb: 1 }} variant="h6">
                Asset Number
              </Typography>
              <List>

                <ListItem>
                  <ListItemText primary="Date:" />
                </ListItem>

                <ListItem>
                  <ListItemText primary="Asset length:" />
                </ListItem>

                <ListItem>
                  <ListItemText primary="Department:" />
                </ListItem>

                <ListItem>
                  <ListItemText primary="Address:" />
                </ListItem>

                <ListItem>
                  <ListItemText primary="Area:" />
                </ListItem>

                <ListItem>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Priority</FormLabel>
                    <FormGroup aria-label="position" row>
                      <FormControlLabel control={<Checkbox />} label="Low" labelPlacement="top" />
                      <FormControlLabel control={<Checkbox />} label="Medium" labelPlacement="top" />
                      <FormControlLabel control={<Checkbox />} label="High" labelPlacement="top" />
                    </FormGroup>
                  </FormControl>
                </ListItem>

                <ListItem>
                  Status
                  <Box sx={{ width: '100%', ml: 2 }}>
                    <LinearProgress variant="determinate" value={progress} />
                  </Box>
                </ListItem>

              </List>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container >
  );
};

export default NoMatch;
