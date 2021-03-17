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
            <li>{day.date}</li>
            <li>{day.maxtempC} Degrees Celcius</li>

            {day.astronomy.map(data => (
              <>
                <li>{data.sunrise}</li>
                <li>{data.sunset}</li>
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
