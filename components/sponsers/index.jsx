import Image from 'next/image'
import React from 'react'

const Sponsers = () => {
  return (
    <div className='w-full bg-[#1B1B1B] text-[#fbf7f7] flex items-center justify-center pb-16' id='sponsers'>
        <div className='flex bg-[#414141] rounded-lg items-center justify-center w-full mx-4 gap-2 h-full flex-col md:flex-row'>
            <div className='flex flex-col items-center justify-center w-full mx-4 gap-2 h-full'>
                <h2>
                    <span className='text-4xl md:text-5xl font-bold bg-gradient-to-tl from-[#3376BD] to-[#08D4F8] inline-block text-transparent bg-clip-text font-prompt pt-6'>Our Sponsors</span>
                </h2>
                <div className='h-2 w-10 bg-gradient-to-tl from-[#3376BD] to-[#08D4F8] rounded-full mt-5'>
                </div>
                <div className='flex flex-col items-center justify-center w-full mx-4 gap-0 h-full'>
                    <div className='flex items-center justify-center w-full mx-4 gap-12 h-full'>
                        <a href="https://www.digitalocean.com/" target="_blank" rel='noreferrer'>
                            <Image src='/images/digitalocean.png' alt='landing' width={200} height={200} />
                        </a>
                        {/* <Image src='/images/digitalocean.png' alt='landing' width={200} height={200} />
                        <Image src='/images/digitalocean.png' alt='landing' width={200} height={200} /> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Sponsers
