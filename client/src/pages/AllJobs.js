import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ListItemText from '@mui/material/ListItemText';

function AllJobs() {

  return (
    <Container sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
      <Grid container rowSpacing={3} >
        <Grid item xs={6}>
          <Paper sx={{ bgcolor: 'white', width: '40vw', mt: 10 }}>
            <Grid container >
              <Grid item justify content="center" alignItems="center">

                <Grid item sx={{ ml: 3 }} >
                  <ListItemText primary="Asset Address" secondary="Asset status" />
                </Grid>

              </Grid>
            </Grid>
          </Paper>
          <Paper sx={{ bgcolor: 'white', width: '40vw', mt: 5 }}>
            <Grid container >
              <Grid item justify content="center" alignItems="center">

                <Grid item sx={{ ml: 3 }} >
                  <ListItemText primary="Asset Address" secondary="Asset status" />
                </Grid>

              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container >
  )
}

export default AllJobs;
