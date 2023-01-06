import Head from 'next/head'
import EventList from '../components/eventList'
import Events from '../components/events'
import Footer from '../components/Footer'
import Landing from '../components/landing'
import Navbar from '../components/navbar'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='bg-[#1B1B1B]'>
      <Head>
        <title>TechWeek by IEEE DTU</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Landing />
      <Events />
      <EventList />
      <Footer />
    </div>
  )
}
