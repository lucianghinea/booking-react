import React, { Component } from 'react';
import { RentalCard } from './RentalCard';

export class RentalList extends Component {

    renderRentals() {
        return this.props.rentals.map((rental, index) => {
            return (
                <RentalCard 
                  rentalData={ rental } 
                  key={index}/>
            )
        })
    }

    render() {
        return (
            <div className="row">
              {this.renderRentals()}
            </div>
        )
    }
}