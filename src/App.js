import './App.css';

import React, { Component } from 'react';
import RestaurantList from './RestaurantList';
import HambugerMenu from 'react-hamburger-menu';
import Map from './Map'

class App extends Component {
  state = {
    open: true,
    locations: [
      {title: 'Holy Hog BBQ', location: {lat: 28.0522737, lng: -82.5031171}},
      {title: 'IHOP', location: {lat: 28.0498504, lng: -82.50315739999999}},
      {title: 'Vizcaya Restaurante & Tapas Bar', location: {lat: 28.047907, lng: -82.50384699999999}},
      {title: 'Carrabba\'s Italian Grill', location: {lat: 28.052608, lng: -82.5034678}},
      {title: 'Red Lobster', location: {lat: 28.0546268, lng: -82.50309179999999}}
    ],
    selectedLocation: null
  }

  componentDidMount() {
    //to be done get 3rd party data
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  selectRestaurant(l){
    this.setState({selectedLocation: l});
  }

  unselectRestaurant(l){
    this.setState({selectedLocation: null});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="hamburger-menu">
            <HambugerMenu isOpen={this.state.open} menuClicked={() => this.handleClick()} color={'white'} height={10} width={20}/>
          </div>
          <h1 className="App-title">Restaurants in Greater Carrollwood</h1>
        </header>
        <RestaurantList open={this.state.open} locations={this.state.locations} selectedLocation={this.state.selectedLocation} selectRestaurant={(l) => this.selectRestaurant(l)}/>
        <div className={(this.state.open ? " " : "full-width-map ") +"map"}>
            <Map locations={this.state.locations}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyClm0mwucTEGueLBQ3ngMj7qsqmfbKefHw&v=3"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            selectedLocation={this.state.selectedLocation}
            selectRestaurant={(l) => this.selectRestaurant(l)}
            onToggleOpen = {() => this.unselectRestaurant()}
          />
        </div>
      </div>
    );
  }
}

export default App;
