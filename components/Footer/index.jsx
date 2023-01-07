/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mx-4 bg-[#1B1B1B] text-[#fbf7f7] flex flex-col flex-nowrap items-center justify-center' id='footer'>
        <div className='bg-[#414141] rounded-lg w-full gap-2 h-full'>
            <div className='grid grid-cols-2 md:grid-cols-4 content-center'>
                <div className='flex flex-col items-center justify-center flex-nowrap'>
                    <Image src='/images/logo.png' alt='logo' width={100} height={100} />
                    <p className='text-[#BECACA] mx-4 text-md'>
                        TechWeek by IEEE-DTU
                    </p>
                </div>
                <div className='text-[#BECACA] mx-4 text-md flex flex-col items-start justify-end'>
                    <p>
                        Designed by :
                    </p>
                    <span className='flex items-center justify-between'>
                        <p className='pr-1'>
                            Gitansh Mehta
                        </p>
                        <a href='https://www.linkedin.com/in/gitansh-mehta/' target='_blank' rel='noreferrer' className='pt-1'>
                            <Image src='/images/linkedin.svg' alt='linkedin' width={15} height={15} />
                        </a>
                    </span>
                </div>
                <div className='flex flex-col'>
                    <p className='text-[#fff] text-lg font-bold py-2'>
                        Contact Us
                    </p>
                    {/* <div className='flex items-center justify-start'>
                        <div className='bg-[#7f7f7f] px-1 pt-1 rounded-lg'>
                            <Image src='/images/call.svg' alt='phone' width={30} height={30} />
                        </div>
                        <div>
                            <p className='text-[#BECACA] mx-4 text-md'>
                                Prince Kumar
                            </p>
                            <p className='text-[#BECACA] mx-4 text-md'>
                                <a href='https://wa.me/918178248936?text=' target='_blank' rel='noreferrer' className='hover:text-[#08D4F8]'>+91 81782 48936</a>
                            </p>
                        </div>
                    </div> */}
                    <div className='flex items-center justify-start'>
                        <div className='bg-[#7f7f7f] px-1 pt-1 rounded-lg'>
                            <Image src='/images/call.svg' alt='phone' width={30} height={30} />
                        </div>
                        <div>
                            <p className='text-[#BECACA] mx-4 text-md'>
                                Sankalp Gautam
                            </p>
                            <p className='text-[#BECACA] mx-4 text-md'>
                                <a href='https://wa.me/918851007045?text=' target='_blank' rel='noreferrer' className='hover:text-[#08D4F8]'>+91 88510 07045</a>
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center justify-start'>
                        <div className='bg-[#7f7f7f] px-1 pt-1 rounded-lg'>
                            <Image src='/images/call.svg' alt='phone' width={30} height={30} />
                        </div>
                        <div>
                            <p className='text-[#BECACA] mx-4 text-md'>
                                Rishu Yadav
                            </p>
                            <p className='text-[#BECACA] mx-4 text-md'>
                                <a href='https://wa.me/918447068664?text=' target='_blank' rel='noreferrer' className='hover:text-[#08D4F8]'>+91 84470 68664</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-[#fff] text-lg font-bold py-2'>
                        Delhi Technological University
                    </p>
                    <div className='flex flex-col md:flex-row items-center justify-start'>
                        <a href='https://goo.gl/maps/otEPWNLtnYi928Sz6' target='_blank' rel='noreferrer'>
                            <Image src='/images/map.svg' alt='location' width={50} height={50} />
                        </a>
                        <div className='flex flex-col items-start justify-center'>
                            <p className='text-[#BECACA] mx-4 text-md'>
                                Shahbad Daulatpur, Bawana Road
                            </p>
                            <p className='text-[#BECACA] mx-4 text-md'>
                                Delhi - 110042
                            </p>
                            <p className='text-[#BECACA] mx-4 text-md'>
                                <a href='https://www.dtu.ac.in/' target='_blank' rel='noreferrer' className='hover:text-[#08D4F8]'>www.dtu.ac.in</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-2'>
                <hr />
                <div className='flex justify-between items-center mx-10 text-sm pt-8    '>
                    <p >
                        © 2023 TechWeek by IEEE-DTU
                    </p>
                    <div className='flex items-center justify-center'>
                        <a href='https://www.facebook.com/ieeedtu/' target='_blank' rel='noreferrer'>
                            <Image src='/images/facebook.svg' alt='facebook' width={30} height={30} />
                        </a>
                        <a href='https://www.instagram.com/ieee.dtu/' target='_blank' rel='noreferrer'>
                            <Image src='/images/instagram.svg' alt='instagram' width={30} height={30} />
                        </a>
                        <a href='https://www.linkedin.com/company/ieee-dtu/' target='_blank' rel='noreferrer'>
                            <Image src='/images/linkedin.svg' alt='linkedin' width={30} height={30} />
                        </a>
                        <a href='https://twitter.com/dtu_ieee' target='_blank' rel='noreferrer'>
                            <Image src='/images/twitter.svg' alt='twitter' width={30} height={30} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
