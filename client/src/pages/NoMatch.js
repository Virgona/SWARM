import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ASSET } from '../utils/queries';
import { useParams } from 'react-router-dom';

// MUI styling imports
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

  const [assetSelect, setAsset] = React.useState('');
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


  const { assetId } = useParams();
  const { data } = useQuery(QUERY_ASSET, {
    variables: {
      asset: { assetId: assetId }
    }
  });
  const asset = data?.asset || [];

  if (!asset) {
    return null;
  }

  return (
    <Container sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
      <Grid container rowSpacing={1} >
        <Grid item xs={6}>
          <Paper sx={{ bgcolor: 'white', width: '35vw', ml: 3, mt: 15 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography sx={{ mt: 3, ml: 2 }} variant="h6">
                  Asset Number: {asset.number}

                </Typography>

                <List>


                  <ListItem>
                    <ListItemText primary="Date: " >{asset.date} </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText primary="Asset length:" >{asset.length} </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText primary="Department:" >{asset.department} </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText primary="Address:" >{asset.address} </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText primary="Area:" >{asset.area} </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText primary="Priority:" >{asset.priority} </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText primary="Status:" >{asset.status} </ListItemText>
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
                    value={assetSelect}
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
                    labelPlacement="top"
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
                    labelPlacement="top"
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
                  <InputLabel id="viewStatus">Review status</InputLabel>
                  <Select
                    labelId="viewStatus"
                    value={viewStatus}
                    label="CCTV Viewed"
                    onChange={handleViewedChange}
                    labelPlacement="top"
                  >
                    <MenuItem value={'no'}>No</MenuItem>
                    <MenuItem value={'yes'}>Yes</MenuItem>
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
                    labelPlacement="top"
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

          </Grid>
        </FormGroup>

      </Paper>
    </Container >
  );
};

export default NoMatch;
