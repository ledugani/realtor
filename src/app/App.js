import React, { Component } from 'react';

import connection from '../firebaseRequests/connection';
import listingRequest from '../firebaseRequests/listings';

import Listings from '../components/Listings/Listings';
import Building from '../components/Building/Building';
import ListingForm from '../components/ListingForm/ListingForm';

import './App.css';

class App extends Component {
  // 3.)
  state = {
    listings: [],
    selectedListingId: -1,
  }

  // 5.)
  listingSelectEvent = (id) => {
    this.setState({
      selectedListingId: id,
    });
  };

  // 6.) POST to fb
  formSubmitEvent = (newListing) => {
    listingRequest.postRequest(newListing)
      .then(() => {
        listingRequest.getRequest()
          .then((listings) => {
            this.setState({listings});
          });
      })
      .catch((errrrorrr) => {
        console.error('error posting listing to firebase', errrrorrr);
      });
  }

  // 2.)
  componentDidMount () {
    connection();

    // 4.)
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
    const {selectedListingId, listings} = this.state;
    const selectedListing = listings.find(listing => listing.id === selectedListingId);
    return (
      <div className="App">
        <div className="col-sm-6">
          <Listings
            listings={this.state.listings}
            onListingSelection={this.listingSelectEvent}
          />
        </div>

        <div className="col-sm-6">
          <Building listing={selectedListing} />
        </div>
        <div className="col-sm-12">
          <ListingForm
            onSubmit={this.formSubmitEvent}
          />
        </div>
      </div>
    );
  }
}

export default App;
