import React, { Component } from 'react';
import './App.css';
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
            <HambugerMenu isOpen={this.state.open} menuClicked={() => this.handleClick()} color={'white'} height={15} width={20}/>
          </div>
          <h1 className="App-title">Restaurants in Greater Carrollwood</h1>
        </header>
        <RestaurantList/>
      </div>
    );
  }
}

export default App;
