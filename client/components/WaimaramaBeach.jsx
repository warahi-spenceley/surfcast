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
            <tr>
            <td>{day.date}</td>
            </tr>
              {day.hourly.map(hour => (
                <>
                  <tr>
                    <td>Time: {hour.time}</td>
                  </tr>
                  <tr>
                    <td>{hour.swellHeight_ft} ft</td>
                    <td>{hour.swellDir16Point}</td>
                    <td>{hour.swellDir}&#176;</td>
                    <td>{hour.swellPeriod_secs}s</td>
                    <td>{hour.sigHeight_m}m</td>
                  </tr>
                  <tr>
                    <td>{hour.winddir16Point}</td>
                    <td>{hour.winddirDegree}&#176;</td>
                    <td>{hour.windspeedKmph} k/ph</td>
                    <td>{hour.WindGustKmph} k/ph</td>
                  </tr>
                  {hour.weatherDesc.map(desc => (
                    <tr>{desc.value}</tr>
                  ))}
                  {hour.weatherIconUrl.map(icon => (
                    <tr>
                      <img src={icon.value} alt="weather icon"></img>
                    </tr>
                  ))}
                </>
              ))}
            </>
          ))}
        </tr>
      </table>
    </>
  )
}

function mapStateToProps (globalState) {
  return {
    waimarama: globalState.hawkesBay
  }
}

export default connect(mapStateToProps)(WaimaramaBeach)
