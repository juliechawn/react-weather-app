import React from 'react';
import CityEntries from './components/CityEntries';
import CityInfo from './components/CityInfo';
import SearchHistory from './components/SearchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>

        <div className='jumbotron'>
          <h1 className='display-4'>Origin Weather Application</h1>
          <p className='lead'>Always know if you'll need an umbrella!</p>
        </div>

        <div className='col'>
          <CityEntries />
        </div>

        <div className='row'>
          <div className='col'>
            <CityInfo />
          </div>
          <div className='col'>
            <SearchHistory />
          </div>
        </div>

      </div>
    );
  }
}
