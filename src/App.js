import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid'
import LocationList from './components/LocationList';
import ForecastExtenden from './components/ForecastExtended';
import './App.css';

const cities = [
  "Buenos Aires,ar",
  "San Jose,cr",
  "Bogota,col",
  "Madrid,es",
  "Barcelona,es",
  "Munich,de"
];

class App extends Component {

  constructor() {
    super();
    this.state = {
      city: null
    };
  }

  handleSelectionLocation = city => {
    this.setState({ city });
    console.log(`handleSelectionLocation ${city}`);
  }

  render() {
    const { city } = this.state;

    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectionLocation}>
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {city ? <ForecastExtenden city={city}></ForecastExtenden> : null}
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
