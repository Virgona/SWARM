import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ListItemText from '@mui/material/ListItemText';

import { useQuery } from '@apollo/client';
import { QUERY_ALL_Assets } from '../utils/queries';

function AllJobs() {

  const { data } = useQuery(QUERY_ALL_Assets);
  const assets = data?.assets || [];

  return (
    <Container sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
      <Grid container rowSpacing={3} >
        <Grid item xs={6}>
          {assets.map(({ number, address }) => (
            <Paper sx={{ bgcolor: 'white', width: '40vw', mt: 10 }}>

              <Grid container >
                <Grid item justify content="center" alignItems="center">

                  <Grid item sx={{ ml: 3 }} >
                    <ListItemText primary={number} secondary={address} />
                  </Grid>

                </Grid>
              </Grid>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </Container >
  )
}

export default AllJobs;
