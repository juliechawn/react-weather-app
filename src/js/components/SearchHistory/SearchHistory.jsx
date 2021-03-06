import React from 'react';

function formatDate(date) {
  var monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "June", "July",
    "Aug", "Sept", "Oct",
    "Nov", "Dec"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

function formatTime(time) {
  var hour = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();

  var ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12;
  hour = hour ? hour : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return hour + ':' + minutes + ':' + seconds + ' ' + ampm;
}

export default class SearchHistory extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
      const { historyNames } = this.props;
      
      const date = new Date(); 
      const time = new Date();   

        return(
            <div className='card'>
              <div className='card-header bg-primary text-white'>Search History</div>
              <div className='card-body'>
              <table className='table table-striped'>
                <tbody>
                  { historyNames.map((historyName, index) => (
                  <tr key={index}>
                    <td defaultValue={name}>{historyName.name}</td>
                    <td><small>
                      { formatDate(date) }
                      <br />
                      { formatTime(time) }
                    </small></td>
                  </tr>
                  ))}
                 </tbody>
              </table>
              </div>
            </div>
        )
    }
}