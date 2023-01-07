/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'

const Landing = () => {
  return (
    <div className='md:h-screen w-screen md:w-auto flex flex-col-reverse md:flex-row items-center justify-center bg-[#1B1B1B] text-[#fbf7f7] font-inter'>
        <div className='flex flex-col items-center md:items-start justify-center w-screen md:w-2/5 md:mx-auto gap-2 md:px-12'>
            <div className='flex flex-col'>
                <h1 className='text-6xl font-bold bg-gradient-to-tl from-[#3376BD] to-[#08D4F8] inline-block text-transparent bg-clip-text font-prompt'>TechWeek &apos;23</h1>
                <h2 className='text-4xl font-bold font-prompt px-4'>By IEEE-DTU</h2>
            </div>
            <div className='flex flex-col items-center md:items-start px-4 justify-center mt-2'>
                <h3 className='text-2xl font-thin font-prompt'>Tech up your skills</h3>
                <p className='text-[#BECACA] pt-1'>
                    TechWeek by IEEE DTU is the annual workshop event for aspiring engineers to get a glimpse into the latest and upcoming technologies. Join us and become a tech trailblazer!
                </p>
            </div>
            <div className='w-full flex justify-center items-center my-2 mb-6 md:mb-0'>
                <button className='bg-[#08D4F8] text-[#1B1B1B] font-bold font-prompt text-xl px-4 w-10/12 rounded-lg py-3 transform transition duration-500 hover:scale-110 hover:bg-transparent border-2 border-[#08D4F8] hover:text-[#08D4F8]'>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSc3PRgsD2bBC72xDCnD9lzPVuipmmGyx2F23VEoqOlxq8Q2Ig/viewform' target='_blank' rel='noreferrer'>Register Now →</a>
                </button>

            </div>
        </div>
        <div className='flex w-full md:w-1/2 justify-center items-center -z-1 mt-24 md:mt-0 mb-20 md:mb-0'>
            <Image src='/images/landing.svg' alt='landing' width={500} height={500} />
        </div>
    </div>
  )
}

export default Landing
