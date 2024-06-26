import React from 'react'
import { HOME_COLLAGE_IMAGES } from '../../../CONSTANTS'

const MeetChef = ({ background, id }) => {
  return (
<div className='grid grid-rows-2 grid-cols-2 auto-cols-auto text-white   ml-[150px]' id={id}>
  {HOME_COLLAGE_IMAGES.map((img, index) => {
    return (
      <div key={index} className="w-full h-full">
        <img 
          src={img} 
          alt={`collage${index + 1}`} 
          className="w-full h-full object-cover"
        />
      </div>
    );
  })}
</div>
  )
}

export default MeetChef