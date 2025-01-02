import React from 'react'
import { useSelector } from 'react-redux';

function Card({data, trending, index}) {

  const imgURL = useSelector(state => state.cinemateData.imageURL);
  return (
    <div className='max-w-[250px] w-full rounded h-full overflow-hidden relative'>
      <img src={imgURL+data?.poster_path} alt="Movie Images" className='w-full h-auto' />
     <div className='absolute top-4'>
     {
        trending && (
          <div className='py-1 px-4 backdrop-blur-3xl rounded-r-full bg-black/60 overflow-hidden'>
            #{index} Trending
          </div>
        )
      }
     </div>
     <div className='absolute bottom-0 h-16 backdrop-blur-3xl w-full bg-black/60 p-2'>
      <h2 className='text-ellipsis line-clamp-1 text-lg font-semibold'>{data?.original_title || data?.name}</h2>
     </div>
    </div>
  )
}

export default Card
