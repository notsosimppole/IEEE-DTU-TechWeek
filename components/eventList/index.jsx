/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import EventCard from './EventCard'

const EventList = () => {
  return (
    <div className='text-white w-full' id='events'>
        <div className='flex flex-col items-center py-10'>
            <h2 className='text-5xl font-bold bg-gradient-to-tl from-[#3376BD] to-[#08D4F8] inline-block text-transparent bg-clip-text font-prompt'>
                Events
            </h2>
            <div className='h-2 w-10 bg-gradient-to-tl from-[#3376BD] to-[#08D4F8] rounded-full mt-2 mb-5'>
            </div>
            <p className='text-xl'>
                With a wide range of workshops from web design to robotics, programming to electronics, there's something for everyone with a passion for technology.
            </p>
        </div>

        <div className='h-screen w-4/5 mx-auto overflow-y-scroll snap-y snap-mandatory rounded-xl scrollbar-hide mb-20'>
            <div className='snap-start h-full w-full'>
                <EventCard title="Basic Programming" img="/images/programming.png" date="16 Jan 2023" />
            </div>
            <div className='h-screen w-full snap-start'>
                <EventCard title="Data Structures and Algorithms" img="/images/dsa.png" date="17 Jan 2023" />
            </div>
            <div className='h-screen w-full snap-start'>
                <EventCard title="Web Development" img="/images/web.png" date="17 Jan 2023" />
            </div>
            <div className='h-screen w-full snap-start'>
                <EventCard title="Machine Learning" img="/images/ml.png" date="19 Jan 2023" />
            </div>
        </div>
    </div>
  )
}

export default EventList