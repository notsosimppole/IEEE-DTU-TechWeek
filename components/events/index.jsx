import Image from 'next/image'
import React from 'react'

const Events = () => {
  return (
    <div className='w-full bg-[#1B1B1B] text-[#fbf7f7] flex items-center justify-center' id='about'>
        <div className='flex bg-[#414141] rounded-lg items-center justify-center w-full mx-4 gap-2 h-full flex-col md:flex-row'>
            <div className='flex w-full md:w-1/2 justify-center items-center'>
                <Image src='/images/events.svg' alt='landing' width={500} height={500} />
            </div>
            <div className='flex flex-col w-full md:w-2/5 mx-auto justify-center items-center md:items-start'>
                <h2>
                    <span className='text-5xl font-bold bg-gradient-to-tl from-[#3376BD] to-[#08D4F8] inline-block text-transparent bg-clip-text font-prompt'>About TechWeek</span>
                </h2>
                <div className='h-2 w-10 bg-gradient-to-tl from-[#3376BD] to-[#08D4F8] rounded-full my-5'>
                </div>
                <p className='text-[#BECACA] pt-1 text-xl  px-10 md:px-0 py-10 md:py-0'>
                    TechWeek by IEEE DTU is the annual workshop event for aspiring engineers to get a glimpse into the latest and upcoming technologies. Join us and become a tech trailblazer!
                </p>
            </div>
        </div>
    </div>
  )
}

export default Events
