import React from 'react'
import { useSelector } from 'react-redux'

function HomeBanner() {

  const bannerData = useSelector(state => state.cinemateData.bannerData.results);
  console.log("My Data is", bannerData)
  return (
    <div>
        {
          bannerData.map((data, index) => {
            return (
              <div>
                {data?.name || data?.original_title}
                <p>{data?.overview}</p>
              </div>
            )
          })
        }
    </div>
  )
  
}

export default HomeBanner