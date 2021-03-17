import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchWaimaramaData } from '../actions/hawkesBay'

function WaimaramaBeach ({ dispatch, waimarama }) {
  useEffect(() => {
    dispatch(fetchWaimaramaData())
  }, [])
  return (
    <>
      <h1>Waimarama Beach</h1>
      <table>
        <tr>
          {waimarama.map(day => (
            <>
              <td>{day.date}</td>
              {day.hourly.map(hour => (
                <>
                  <tr>
                    <td>{hour.swellHeight_ft} ft</td>
                  </tr>
                </>
              ))}
            </>
          ))}
        </tr>
      </table>

      {/* <ul>
        {waimarama.map(day => (
          <>
            <li>Date: {day.date}</li>
            <li>Max temp: {day.maxtempC}&#176;</li>

            {day.astronomy.map(astroData => (
              <>
                <li>Sunrise: {astroData.sunrise}</li>
                <li>Sunset: {astroData.sunset}</li>
              </>
            ))}

            {day.hourly.map(hourlyData => (
              <>
                <li>Time: {hourlyData.time}</li>
                <li>Windspeed: {hourlyData.windspeedKmph} km/h</li>
              </>
            ))}
          </>
        ))}
      </ul> */}
    </>
  )
}

function mapStateToProps (globalState) {
  return {
    waimarama: globalState.hawkesBay
  }
}

export default connect(mapStateToProps)(WaimaramaBeach)
