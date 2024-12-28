import React from 'react'
import { useSelector } from 'react-redux'

function HomeBanner() {

  const bannerData = useSelector(state => state.cinemateData.bannerData.results);
  const imgURL = useSelector(state => state.cinemateData.imageURL)
  // console.log("My Data is", bannerData)

  if (!bannerData) return <div>Loading...</div>;
  return (
    <section className='w-full h-full'>
    <div className='flex'>
        {
          bannerData.map((data, index) => {
            console.log(data)
            return (
              <div className='min-w-full min-h-[450px] lg:min-h-[90vh] relative'>
                {/* Display Banner Images */}
                <div>
                  <img
                    src = {imgURL + data.backdrop_path}
                    alt = "Images"
                    className='w-full'
                  />
                </div>
                {/* Apply Gradient to the banner images */}
                <div className='absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900 to-transparent'>
                </div>
                {/* Movie/tv show details */}
                <div className='container mx-auto absolute bottom-0 max-w-md px-4 mx-4'>
                  <h2 className='font-bold text-3xl'>
                    {data?.name || data?.original_title}
                  </h2>
                  <p className='text-ellipsis line-clamp-3 my-2'>
                    {data.overview}
                  </p>
                  <div className='flex items-center gap-4'>
                    <p>Rating : {Number(data.vote_average).toFixed(1)}</p>
                    <p>Release Date : {data?.release_date || data?.first_air_date}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
    </div>
    </section>
  )
  
}

export default HomeBanner