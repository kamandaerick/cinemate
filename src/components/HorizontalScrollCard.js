import React from 'react'
import Card from './Card'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const HorizontalScrollCard = ({data=[], heading}) => {
  return (
    <div>
        <div className=' container mx-auto my-10 px-3 '>
          <h2 className='text-2xl text-white font-bold mb-2'>{heading}</h2>
          <div className='overflow-hidden relative'>
            <div className= "grid gap-3 grid-flow-col overflow-x-scroll z-10 relative">
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
              <button className='bg-white p-1 rounded-full z-10 text-black'>
                <GrPrevious size={24}/>
              </button>
              <button className='bg-white p-1 rounded-full z-10 text-black'>
                <GrNext size={24}/>
              </button>
            </div>
          </div>

      </div>
    </div>
  )
}

export default HorizontalScrollCard
