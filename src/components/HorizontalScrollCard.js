import React from 'react'
import Card from './Card'

const HorizontalScrollCard = ({data=[], heading}) => {
  return (
    <div>
        <div className='container mx-auto my-10 px-3'>
          <h2 className='text-2xl text-white font-bold mb-2'>{heading}</h2>
          <div className='overflow-hidden'>
            <div className= "grid gap-3 grid-flow-col overflow-x-scroll">
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
          </div>
      </div>
    </div>
  )
}

export default HorizontalScrollCard
