import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import { setWaimarama, setWaipatiki, setOceanbeach, setTeawanga } from '../actions/hawkesbayPlaces'

import { setLyallbay } from '../actions/wellingtonPlaces'

function NorthIslandList ({ dispatch }) {
  // Hawkes Bay
  function handleWaimaramaClick () {
    dispatch(setWaimarama(true))
  }
  function handleWaipatikiClick () {
    dispatch(setWaipatiki(true))
  }
  function handleOceanbeachClick () {
    dispatch(setOceanbeach(true))
  }
  function handleTeawangaClick () {
    dispatch(setTeawanga(true))
  }
  // Wellington
  function handleLyallbayClick () {
    dispatch(setLyallbay(true))
  }
  return (
    <>
      <h5>Hawke&#39;s Bay</h5>
      <ul>
        <Link onClick={handleWaimaramaClick} to="/northisland/hawkesbay/waimaramabeach">Waimarama Beach</Link>
      </ul>
      <ul>
        <Link onClick={handleWaipatikiClick} to="/northisland/hawkesbay/waipatikibeach">Waipatiki Beach</Link>
      </ul>
      <ul>
        <Link onClick={handleOceanbeachClick} to="/northisland/hawkesbay/oceanbeach">Ocean Beach</Link>
      </ul>
      <ul>
        <Link onClick={handleTeawangaClick} to="/northisland/hawkesbay/teawanga">Te Awanga Point</Link>
      </ul>

      <h5>Wellington</h5>
      <ul>
        <Link onClick={handleLyallbayClick} to="/northisland/wellington/lyallbay">Lyall Bay</Link>
      </ul>
    </>
  )
}

export default connect()(NorthIslandList)
