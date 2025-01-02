import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import moment from 'moment'

function HomeBanner() {

  const bannerData = useSelector(state => state.cinemateData.bannerData.results);
  const imgURL = useSelector(state => state.cinemateData.imageURL);
  const [currentImage, setCurrentImage] = useState(0);
  // console.log("My Data is", bannerData)

  // Handle Previous and next buttons' logic
  const handleNext = () => {
    if(currentImage < bannerData.length - 1) {
      setCurrentImage(prev => prev + 1)
    }
  }

  const handlePrevious = () => {
    if(currentImage > 0) {
      setCurrentImage(prev => prev - 1)
    }
  }

  // Create carousel of the banner images
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage < bannerData.length - 1) {
        handleNext();
      } else {
        setCurrentImage(0)
      }
    }, 7000)
    return () => clearInterval(interval)
  })

  if (!bannerData) return <div>Loading...</div>;
  return (
    <section className='w-full h-full'>
    <div className='flex'>
        {
          bannerData.map((data, index) => {
            // console.log(data)
            return (
              <div className='min-w-full min-h-[450px] lg:min-h-[90vh] relative group transition-all' 
              style={{transform: `translateX(-${currentImage * 100}%)`}}>
                {/* Display Banner Images */}
                <div>
                  <img
                    src = {imgURL + data.backdrop_path}
                    alt = "Images"
                    className='w-full h-fit'
                  />
                </div>
                 {/* Buttons for Next and Previous  */}
                 <div className='absolute hidden top-0 w-full h-full items-center justify-between px-4 group-hover:lg:flex'>
                  <button className='bg-white p-1 rounded-full z-10 text-black' onClick={handlePrevious}>
                    <GrPrevious  size={24}/>
                  </button>
                  <button className='bg-white p-1 rounded-full z-10 text-black' onClick={handleNext}>
                    <GrNext size={24} />
                  </button>
                </div>
                {/* Apply Gradient to the banner images */}
                <div className='absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900 to-transparent'>
                </div>
                {/* Movie/tv show details */}
                <div className='container mx-auto absolute bottom-0 max-w-md px-9'>
                  <h2 className='font-bold text-3xl'>
                    {data?.name || data?.original_title}
                  </h2>
                  <p className='text-ellipsis line-clamp-3 my-2'>
                    {data.overview}
                  </p>
                  <div className='flex items-center gap-4'>
                    <p>Rating : {Number(data.vote_average).toFixed(1)}</p>
                    <span>|</span>
                    <p>Release Date : {moment(data?.release_date || data?.first_air_date).format('ll')}</p>
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