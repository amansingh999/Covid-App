import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';

const CovidResult = (props) => {
  return (
    <div>
      <div className='covid_result_heading'>
        <h2>The below Covid-19 Data is of {} state.</h2>
      </div>
      <div>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          className='grid_padding'
        >
          <Grid item xs={2} sm={4} md={4} >
            <Paper align='center' className='inner_grid'>
              <Typography>Confirmed</Typography>
            </Paper>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <Paper align='center' className='inner_grid'>
              <Typography>Active</Typography>
            </Paper>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <Paper align='center' className='inner_grid'>
              <Typography>Death</Typography>
            </Paper>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <Paper align='center' className='inner_grid'>
              <Typography>Recovered</Typography>
            </Paper>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <Paper align='center' className='inner_grid'>
              <Typography>Migrated Other</Typography>
            </Paper>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <Paper align='center' className='inner_grid'>
              <Typography>Last Updated</Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CovidResult;
