import React, { Component } from 'react';

import connection from '../firebaseRequests/connection';
import listingRequest from '../firebaseRequests/listings';

import Listings from '../components/Listings/Listings';
import Building from '../components/Building/Building';
import ListingForm from '../components/ListingForm/ListingForm';

import './App.css';

class App extends Component {
  state = {
    listings: [],
  }

  // 2.)
  componentDidMount () {
    connection();

    // 3.)
    listingRequest.getRequest()
      .then((listings) => {
        this.setState({listings: listings}); // could just put listings
      })
      .catch((errror) => {
        console.error('error with listing GET', errror);
      });
  }

  // 1.)
  render () {
    return (
      <div className="App">
        <div className="col-sm-6">
          <Listings />
        </div>

        <div className="col-sm-6">
          <Building />
        </div>
        <div className="col-sm-12">
          <ListingForm />
        </div>
      </div>
    );
  }
}

export default App;
