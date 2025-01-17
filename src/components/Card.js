import React from 'react'
import { useSelector } from 'react-redux';
import moment from 'moment'
import { MdOutlineStarPurple500 } from "react-icons/md";
// import { Link } from 'react-router-dom';

function Card({data, trending, index}) {

  const imgURL = useSelector(state => state.cinemateData.imageURL);
  return ( 
     <div className='max-w-[250px] min-w-[250px] w-full rounded h-full overflow-hidden relative hover:scale-105 transition-all'>
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
      <h2 className='text-ellipsis line-clamp-1 text-lg font-semibold'>
        {data?.original_title || data?.name}
      </h2>
      <div className='text-sm flex justify-between'>
        <p>
          {moment(data?.release_date || data?.first_air_date).format('ll')}
        </p>
        <div className='flex justify-end items-center'>
          <MdOutlineStarPurple500 size={15}/>
          <p>
          {Number(data.vote_average).toFixed(1)}
          </p>
        </div>

      </div>
     </div>
    </div>
  )
}

export default Card
