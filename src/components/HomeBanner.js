import React from 'react'
import { useSelector } from 'react-redux'

function HomeBanner() {

  const bannerData = useSelector(state => state.cinemateData.bannerData.results);
  const imgURL = useSelector(state => state.cinemateData.imageURL)
  console.log("My Data is", bannerData)

  if (!bannerData) return <div>Loading...</div>;
  return (
    <div>
        {
          bannerData.map((data, index) => {
            return (
              <div>
                <img
                  src = {imgURL + data.backdrop_path}
                  alt = "Images"
                />
              </div>
            )
          })
        }
    </div>
  )
  
}

export default HomeBanner