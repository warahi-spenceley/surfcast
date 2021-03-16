import React from 'react'
import { connect } from 'react-redux'

function NorthIslandList ({ hawkesBay }) {
  return (
    <>
      <h1>North Island</h1>
      <ul>
        <li>Waimarama Beach</li>
        <li>Ocean Beach</li>
        <li>Waipatiki Beach</li>
        <li>Te Awanga Point</li>
      </ul>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    hawkesBay: globalState.hawkesBay
  }
}

export default connect(mapStateToProps)(NorthIslandList)
