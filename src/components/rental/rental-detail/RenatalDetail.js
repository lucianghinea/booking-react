import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';

import * as actions from '../../../actions';

class RentalDetail extends Component {

    componentWillMount() {
        //Dispatch action
        const rentalId = this.props.match.params.id;
        this.props.dispatch(actions.fetchRentalById(rentalId));
    }

    render() {
        const rental = this.props.rental;

        if(rental.id) {
        return (
            <div>
              <p>{rental.title}</p>
              <p>{rental.city}</p>
              <p>{rental.category}</p>
              <p>{rental.dailyRate}</p>
            </div>
            )
        } else {
            return (
                <h1>Loading....</h1>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        rental: state.rental.data
    }
}

export default connect(mapStateToProps)(RentalDetail)