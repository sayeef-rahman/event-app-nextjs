import Head from 'next/head'
import Image from 'next/image'
import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../dummyData'
import styles from '../styles/Home.module.css'

export default function HomePage() {
  const filteredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList filteredEvents={filteredEvents}></EventList>
    </div>
  )
}
