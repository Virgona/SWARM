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
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const NoMatch = () => {

  const [asset, setAsset] = React.useState('');
  const handleAsetSelect = (event) => {
    setAsset(event.target.value);
  }

  const [reviewStatus, setReviewStatus] = React.useState('');
  const handleReviewChange = (event) => {
    setReviewStatus(event.target.value);
  }

  const [cctvQuality, setCCTVQuality] = React.useState('');
  const handleCCTVChange = (event) => {
    setCCTVQuality(event.target.value);
  }

  const [viewStatus, setCCTVViewed] = React.useState('');
  const handleViewedChange = (event) => {
    setCCTVViewed(event.target.value);
  }

  const [viewAssets, setAssetWork] = React.useState('');
  const handleAssetSelect = (event) => {
    setAssetWork(event.target.value);
  }

  const [issues, setIssues] = React.useState('');
  const handleIssueSelection = (event) => {
    setIssues(event.target.value);
  }

  const [reviewer, setReviewer] = React.useState('');
  const handleUserReviewer = (event) => {
    setReviewer(event.target.value);
  }


  return (
    <Container sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
      <Grid container rowSpacing={1} >
        <Grid item xs={6}>
          <Paper sx={{ bgcolor: 'white', width: '40vw', ml: 3, mt: 15 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography sx={{ mt: 3, ml: 2 }} variant="h6">
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
                    <ListItemText primary="Priority:" />
                  </ListItem>

                  <ListItem>
                    <ListItemText primary="Status:" />
                  </ListItem>

                  <ListItem>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Work Required</FormLabel>
                      <FormGroup aria-label="position" row>
                        <FormControlLabel control={<Checkbox />} labelPlacement="top" />
                      </FormGroup>
                    </FormControl>
                  </ListItem>

                </List>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Card raised={true} sx={{
            width: 'md',
            bgcolor: "grey.700",
            color: "white",
            mt: 14

          }}>
            <CardHeader title='CCTV Footage' />
            <CardActionArea>
              <CardMedia
                component='video'
                image={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
              />
            </CardActionArea>
          </Card>

        </Grid>
      </Grid>

      <Paper component="form" raised={true} sx={{ width: '100%', mt: 5, bgcolor: "white" }}>
        <Typography sx={{ mt: 5, ml: 2 }} variant="h6">
          Work Order
        </Typography>

        <FormGroup aria-label="position" row >
          <Grid container column spacing={{ xs: 1, sm: 2, md: 3 }} justify content="center" alignItems="center">
            <Grid item xs={3}>
              <TextField id="outlined-basic" label="Work to be carried out" variant="filled" />
            </Grid>
            <Grid item xs={3}>
              <TextField color="success" id="outlined-basic" label="CCTV footage link" variant="filled" />
            </Grid>
            <Grid item xs={3}>
              <TextField id="outlined-basic" label="Accessability" variant="filled" />
            </Grid>
            <Grid item xs={3}>
              <TextField id="outlined-basic" label="Contractor" variant="filled" />
            </Grid>
          </Grid>
        </FormGroup>

        <FormGroup aria-label="position" row >
          <Grid container column spacing={{ xs: 1, sm: 2, md: 3 }} justify content="center" alignItems="center">
            <Grid item xs={3}>
              <ListItem >
                <FormControl fullWidth>
                  <InputLabel id="AssetSelect">Asset</InputLabel>
                  <Select
                    labelId="AssetSelect"
                    id="demo-simple-select"
                    value={reviewStatus}
                    label="AssetSelect"
                    onChange={handleAsetSelect}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                  </Select>
                </FormControl>
              </ListItem>
            </Grid>

            <Grid item xs={3}>
              <ListItem>
                <FormControl fullWidth>
                  <InputLabel id="ReviewStatus">Review status</InputLabel>
                  <Select
                    labelId="ReviewStatus"
                    value={reviewStatus}
                    label="Review status"
                    onChange={handleReviewChange}
                  >
                    <MenuItem value={'pre'}>Pre</MenuItem>
                    <MenuItem value={'post'}>Post</MenuItem>
                    <MenuItem value={'pre-&-post'}>Pre & Post</MenuItem>
                  </Select>
                </FormControl>
              </ListItem>
            </Grid>

            <Grid item xs={3}>
              <ListItem>
                <FormControl fullWidth>
                  <InputLabel id="ReviewStatus">CCTV Quality</InputLabel>
                  <Select
                    labelId="cctvQuality"
                    value={cctvQuality}
                    label="CCTV Quality"
                    onChange={handleCCTVChange}
                  >
                    <MenuItem value={'poor'}>Poor</MenuItem>
                    <MenuItem value={'fair'}>Fair</MenuItem>
                    <MenuItem value={'good'}>Good</MenuItem>
                  </Select>
                </FormControl>
              </ListItem>
            </Grid>

            <Grid item xs={3}>
              <ListItem>
                <FormControl fullWidth>
                  <InputLabel id="userReviewer">reviewer</InputLabel>
                  <Select
                    labelId="userReviewer"
                    value={viewStatus}
                    label="reviewer"
                    onChange={handleUserReviewer}
                  >
                    <MenuItem value={'no'}>list of users</MenuItem>

                  </Select>
                </FormControl>
              </ListItem>
            </Grid>
          </Grid >
        </FormGroup>

        <FormGroup aria-label="position" row>
          <Grid container column spacing={{ xs: 1, sm: 2, md: 3 }} justify content="center" alignItems="center">

            <Grid item xs={3}>
              <TextField id="outlined-basic" label="Work to be carried out" variant="filled" />
            </Grid>

            <Grid item xs={3}>
              <TextField id="outlined-basic" label="Work to be carried out" variant="filled" />
            </Grid>

            <Grid item xs={3}>
              <TextField id="outlined-basic" label="Work to be carried out" variant="filled" />
            </Grid>

            <Grid item xs={3}>
              <ListItem>
                <FormControl fullWidth>
                  <InputLabel id="setAssetWork">Review status</InputLabel>
                  <Select
                    labelId="setAssetWork"
                    value={viewAssets}
                    label="view all assets"
                    onChange={handleAssetSelect}
                  >
                    <MenuItem value={'allAssets'}>All Assets</MenuItem>

                  </Select>
                </FormControl>
              </ListItem>
            </Grid>
          </Grid>
        </FormGroup>

        <FormGroup aria-label="position" row>
          <Grid container spacing={1} justifyContent="center" alignItems="center">

            <Grid item>
              <TextField id="outlined-basic" label="Other Notes" variant="filled" />
            </Grid>

            <Grid item xs={3}>
              <ListItem>
                <FormControl fullWidth>
                  <InputLabel id="issueSelect">Select issues</InputLabel>
                  <Select
                    labelId="issueSelect"
                    value={issues}
                    label="Select issues"
                    onChange={handleIssueSelection}
                  >
                    <MenuItem value={'crack'}>Crack</MenuItem>
                    <MenuItem value={'puncture'}>Puncture</MenuItem>
                    <MenuItem value={'roots'}>Roots</MenuItem>
                    <MenuItem value={'collapse'}>Collapse</MenuItem>
                    <MenuItem value={'clean/cctv'}>Clean/CCTV</MenuItem>
                    <MenuItem value={'other'}>Other</MenuItem>
                  </Select>
                </FormControl>
              </ListItem>
            </Grid>

          </Grid>
        </FormGroup>

      </Paper>
    </Container >
  );
};

export default NoMatch;
