import React from 'react'
import GoogleMap from'./GoogleMap'
import '../.././../Styles/App.css';
import Layout from '../../../Layout/Layout'
function Maps() {
    return (
      <Layout>
        <div className="app-map">
        <p className="carbon-title"> Carbon Footprint In Your Local Area </p>
      <GoogleMap />
  
    </div>
    </Layout>
    )
}

export default Maps
