import axios from 'axios';

import React from 'react';

import {
  updateCity,
  searchCity,
} from './cityActions';

export default class cityEntries extends React.Component {
  constructor(props) {
    super(props)

    this.handleCityInput = this.handleCityInput.bind(this);
    this.handleCitySearch = this.handleCitySearch.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleCityInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target
    dispatch(updateCity(value));
  }

  handleCitySearch(event) {
    const { dispatch, searchName } = this.props;
    dispatch(searchCity(searchName));
  }

  handleButton(event) {
    const { dispatch } = this.props
    const searchName = event.target.value
    dispatch(searchCity(searchName))
  }

  componentDidMount() {
    const { dispatch } = this.props
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=san+diego&units=imperial&appid=ea12361fcb12b97a8d49cccba2fb3e71')
      .then((res) => {
        let searchName = res.data.name;
        dispatch(searchCity(searchName))
      })
  }


  render() {
    const { searchName, cityData, error, errorName } = this.props;

    return (
      <form>
        <div className='row'>
          <div className='btn-group' role='group'>
            <button type='button' className='btn btn-primary' value={'San Diego'} onClick={this.handleButton}>San Diego</button>
            <button type='button' className='btn btn-primary' value={'New York'} onClick={this.handleButton}>New York</button>
            <button type='button' className='btn btn-primary' value={'Washington'} onClick={this.handleButton}>Washington D.C.</button>
            <button type='button' className='btn btn-primary' value={'London'} onClick={this.handleButton}>London</button>
            <button type='button' className='btn btn-primary' value={'Tokyo'} onClick={this.handleButton}>Tokyo</button>
          </div>

          <div className="input-group mb-3">

            <input type="text"
              className="form-control"
              id='city-input'
              value={searchName}
              onChange={this.handleCityInput}
              placeholder="Enter city"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-primary"
                type="button"
                onClick={this.handleCitySearch}
              >Go!</button>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='text-danger'>{error} {errorName}</div>
        </div>
      </form>
    );
  }
}