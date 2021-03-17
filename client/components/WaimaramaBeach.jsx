import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchWaimaramaData } from '../actions/hawkesBay'

function WaimaramaBeach ({ dispatch, hawkesBay }) {
  useEffect(() => {
    dispatch(fetchWaimaramaData())
  }, [])
  return (
    <>
      {console.log(hawkesBay)}
      <h1>Waimarama Beach</h1>
      <ul>
        {hawkesBay.map(day => (
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
      </ul>
    </>
  )
}

function mapStateToProps (globalState) {
  return {
    hawkesBay: globalState.hawkesBay
  }
}

export default connect(mapStateToProps)(WaimaramaBeach)
