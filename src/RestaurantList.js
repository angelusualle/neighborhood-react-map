import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';

class RestaurantList extends Component{
    state= {
        searchTerm: ''
    }

    filterChange(searchTerm){
        this.setState({searchTerm})
    }

    render() {
        let showingLocations
        if (this.state.searchTerm){
            const match = new RegExp(escapeRegExp(this.state.searchTerm), 'i')
            showingLocations = this.props.locations.filter(l => match.test(l.title));
        }
        else {
            showingLocations = this.props.locations
        }

        return <nav className={(this.props.open ? " " : "menu-hidden ") +"restaurant-list"}>
            <span className="filter-title">Location Filter</span>
            <input type="text" className="filter" formNoValidate={true} onChange={(e) => this.filterChange(e.target.value)}/>
            <ul className="location-list">
            {showingLocations.map((l, i) => 
                <li className="location-item" key={i}>{l.title}</li>
            )}
            </ul>
        </nav>
    }
}

export default RestaurantList