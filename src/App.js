import React, { Component } from 'react';
import LocationList from './components/LocationList';
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

  handleSelectionLocation = city => {
    console.log(`handleSelectionLocation ${city}`);
  }

  render() {
    return (
      <div className="App">
        <LocationList
          cities={cities}
          onSelectedLocation={this.handleSelectionLocation}>
        </LocationList>
      </div>
    );
  }
}

export default App;
