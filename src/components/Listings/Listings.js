import React from 'react';
import PropTypes from 'prop-types';

import {listingShape} from '../../props/listingProp';
import './Listings.css';

class Listings extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(listingShape),
  };

  render () {
    const {listings} = this.props;
    // same thing as writing "const listings = this.props.listings"
    const listingsItemComponents = listings.map((listingItem) => {
      return (
        <li key={listingItem.id}>{listingItem.price}</li>
      );
    });

    return (
      <div className="Listings">
        <h2>Listings</h2>
        <ul>
          {listingsItemComponents}
        </ul>
      </div>
    );
  }
}

export default Listings;
