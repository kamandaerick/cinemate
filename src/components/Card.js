import React from 'react'
import { useSelector } from 'react-redux';

function Card({data, trending}) {

  const imgURL = useSelector(state => state.cinemateData.imageURL);
  return (
    <div className='max-w-[250px] w-full rounded h-full overflow-hidden'>
      <img src={imgURL+data?.poster_path} alt="Movie Images" className='w-full h-auto' />
      
    </div>
  )
}

export default Card
