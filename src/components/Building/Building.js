import React from 'react';

import './Building.css';

import {listingShape} from '../../props/listingProp';
import {formatPrice} from '../../helper';

class Building extends React.Component {
  static propTypes = {listing: listingShape};

  render () {
    const {listing} = this.props;
    if (!listing) {
      return (
        <h1>OH NO!</h1>
      );
    }
    return (
      <div className="Building">
        <div className="row">
          <div className="col-xs-6">
            <img className="building-image" src={listing.imageUrl} alt="Selected Listing"/>
          </div>
          <div className="col-xs-6">
            <h3>{formatPrice(listing.price)}</h3>
            <p>{formatPrice(listing.estimatedMonthlyMortgage)}</p>
            <h4>{listing.address} {listing.city}, {listing.state} {listing.zip}</h4>
            <h5>{listing.numBeds} Bed/{listing.numBaths} Bath</h5>
            <h5>{listing.squareFootage} ft <sup>2</sup></h5>
            <p>{listing.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Building;
