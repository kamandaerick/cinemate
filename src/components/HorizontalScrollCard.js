import React, { useRef } from 'react'
import Card from './Card'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const HorizontalScrollCard = ({data=[], heading}) => {
  const containerRef = useRef()
  // Handle next button
  const handleNext = () => {
    containerRef.current.scrollLeft += 300;
  }
  // Handle previous button
  const handlePrevious = () => {
    containerRef.current.scrollLeft -= 300;
  }
  return (
    <div>
        <div className=' container mx-auto my-10 px-3 '>
          <h2 className='text-2xl text-white font-bold mb-2'>{heading}</h2>
          <div  className='overflow-hidden relative'>
            <div ref={containerRef} className= "grid gap-3 grid-flow-col overflow-x-scroll z-10  scroll-smooth transition-all">
              {
              data.map((data, index) => {
                return (
                  <div key={data.id + 'heading' + index}>
                    <Card
                      data={data}
                      index={index + 1}
                      trending={true}
                    />
                  </div>
                )
              })
            }
            </div>
              <div className='absolute flex top-0 justify-between w-full h-full items-center z-100'>
              <button onClick={handlePrevious} className='bg-white p-1 rounded-full z-10 text-black'>
                <GrPrevious size={24}/>
              </button>
              <button onClick={handleNext} className='bg-white p-1 rounded-full z-10 text-black'>
                <GrNext size={24}/>
              </button>
            </div>
          </div>

      </div>
    </div>
  )
}

export default HorizontalScrollCard
