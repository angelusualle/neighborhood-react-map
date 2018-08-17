import './App.css';

import React, { Component } from 'react';
import RestaurantList from './RestaurantList';
import HambugerMenu from 'react-hamburger-menu';

class App extends Component {
  state = {
    open: true
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    });
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
        <RestaurantList open={this.state.open}/>
      </div>
    );
  }
}

export default App;
