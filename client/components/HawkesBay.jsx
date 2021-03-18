import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import { setWaimarama } from '../actions/hawkesBayBeaches'

function HawkesBay ({ dispatch, hawkesBayBeaches }) {

  function handleWaimaramaClick () {
    dispatch(setWaimarama(true))
  }

  return (
    <>
      <h1>Hawke&#39;s Bay</h1>
      <ul>
        <Link onClick={handleWaimaramaClick} to="/northisland/hawkesbay/waimaramabeach">Waimarama Beach</Link>
      </ul>
      <ul>
        <Link to="/northisland/hawkesbay/waimaramabeach">Waipatiki Beach</Link>
      </ul>
    </>
  )
}

function mapStateToProps (globalState) {
  hawkesBayBeaches: globalState.hawkesBayBeaches
}

export default connect(mapStateToProps)(HawkesBay)
