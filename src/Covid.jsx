import React, { useEffect, useState } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import CovidResult from './CovidResult';
const Covid = () => {
  const [covidData, setCovidData] = useState([]);
  const [stateName, setStateName] = useState();
  const [getResult, setResult] = useState(false);
  useEffect(() => {
    getCovidData();
  }, []);

  const getCovidData = async () => {
    try {
      const url = 'https://data.covid19india.org/data.json';
      const res = await fetch(url);
      const covidData = await res.json();
      setCovidData(covidData.statewise);
    } catch (err) {
      console.log(err);
    }
  };

  const handleStateDropdown = (e) => {
    setStateName(e.target.value);
  };

  if (getResult) {
    return <CovidResult covidData={covidData}/>;
  }

  return (
    <div>
      <div className='covid_heading'>
        <h1>Live Covid-19 Tracker</h1>
      </div>
      <div className='dropdown_container'>
        <FormControl className='dropdown'>
          <InputLabel id='demo-simple-select-label'>Select State</InputLabel>
          <Select onChange={handleStateDropdown} value={stateName}>
            <MenuItem>
              <em>Select</em>
            </MenuItem>
            {covidData.map((item) => (
              <MenuItem value={item.state}>{item.state}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className='search_button'>
        <Button
          variant='contained'
          color='primary'
          onClick={() => setResult(true)}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default Covid;
