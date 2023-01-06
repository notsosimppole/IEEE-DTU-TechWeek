import Image from 'next/image'
import React from 'react'

const EventCard = (props) => {
  return (
    <div className='relative h-full w-full bg-fixed flex flex-col'
      style={{
        backgroundImage: `url(${props.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <h2 className='w-full md:text-9xl text-4xl py-5 text-center font-extrabold font-spaceMono text-black mix-blend-lighten bg-[#ffffff]'>
        {props.title}
      </h2>
      <h3 className='text-center font-semibold font-prompt w-full md:text-5xl text-xl text-black mix-blend-lighten bg-[#ffffff]'>
        {props.date}
      </h3>
    </div>
  )
}

export default EventCard