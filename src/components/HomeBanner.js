import React from 'react'
import { useSelector } from 'react-redux'

function HomeBanner() {

  const bannerData = useSelector(state => state);
  console.log("My Data is", bannerData)
  return (
    <div>
      
    </div>
  )
}

export default HomeBanner
