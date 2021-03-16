import React from 'react'
import { connect } from 'react-redux'

function NorthIslandList ({ hawkesBay }) {
  return (
    <>
      <h1>North Island</h1>
      {/* <ul>
    {hawkesBay.map(day => (
      <>
        <li>{day.date}</li>
        <li>{day.maxtempC} Degrees Celcius</li>
      </>
    ))}
  </ul> */}
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    hawkesBay: globalState.hawkesBay
  }
}

export default connect(mapStateToProps)(NorthIslandList)
