import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row flex-nowrap w-full items-center justify-between bg-[#1B1B1B] z-10 text-[#fbf7f7] fixed top-0'>
        <a href="#">
            <Image src='/images/logo.png' alt='logo' width={100} height={100} />
        </a>

        <div className='flex flex-row flex-nowrap items-center justify-center gap-4 px-14'>
            <a href='#about' className='text-[#BECACA] text-lg font-bold py-2 hover:text-[#08D4F8]'>
                About
            </a>
            <a href='#events' className='text-[#BECACA] text-lg font-bold py-2 hover:text-[#08D4F8]'>
                Events
            </a>
            <a href='#footer' className='text-lg font-bold py-2 text-[#08D4F8] border-2 border-[#08D4F8] transition transform hover:scale-110 hover:bg-[#08D4F8] hover:text-[#1B1B1B] duration-150 px-5'>
                Contact Us
            </a>
        </div>
    </div>
  )
}

export default Navbar
