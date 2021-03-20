import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

function Home () {
  return (
    <>
      <div className='home'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-7 about-nz">
            </div>
            <div className="north-island col-sm-4">
              <Link to="/northisland"><img src="/images/homepage/north_island.png" alt="north-island-link"/></Link>
            </div>
            <div className="south-island float-end">
              <Link to="/southisland"><img src="/images/homepage/south_island.png" alt="south island link"/></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default connect()(Home)
