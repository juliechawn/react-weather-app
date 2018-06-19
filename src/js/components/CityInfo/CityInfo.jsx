import React from 'react';

export default class CityInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cityName, cityLat, cityLong, cityTemp, cityHumidity, cityPressure, cityHightemp, cityLowtemp, cityWindspeed, cityIcon } = this.props;

    return (

      <div className='card'>

        <div className='card-header bg-primary text-white'>City Information</div>
        <div className='card-body text-center'>
          <img src={'https://openweathermap.org/img/w/' + cityIcon + '.png'} />
          <h2>{cityName}</h2>
          <p><small>Lat/Long:<text defaultValue={name}>{cityLat}</text>,<text defaultValue={name}>{cityLong}</text></small></p>
          <hr />
          <div className='row'>
            <div className='col'>
              <div className='col'><small><b>Temperature(F)</b></small></div>
              <div className='col text-success' defaultValue={name} >{cityTemp}F</div>
            </div>
            <div className='col'>
              <div className='col'><small><b>Pressure</b></small></div>
              <div className='col text-success' defaultValue={name}>{cityPressure}</div>
            </div>
            <div className='col'>
              <div className='col'><small><b>Humidity</b></small></div>
              <div className='col text-success' defaultValue={name}>{cityHumidity}%</div>
            </div>
          </div>
          <br />
          <div className='row'>
            <div className='col'>
              <div className='col'><small><b>Low Temp(F)</b></small></div>
              <div className='col text-success' defaultValue={name}>{cityLowtemp}F</div>
            </div>
            <div className='col'>
              <div className='col'><small><b>High Temp(F)</b></small></div>
              <div className='col text-success' defaultValue={name}>{cityHightemp}F</div>
            </div>
            <div className='col'>
              <div className='col'><small><b>Wind Speed</b></small></div>
              <div className='col text-success' defaultValue={name}>{cityWindspeed}mph</div>

            </div>
          </div>

        </div>
      </div>

    );
  }
}