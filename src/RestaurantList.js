import React, { Component } from 'react';

class RestaurantList extends Component{
    render() {
        return <nav className={(this.props.open ? " " : "menu-hidden ") +"restaurant-list"}>Heres a list!</nav>
    }
}

export default RestaurantList