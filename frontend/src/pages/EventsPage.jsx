import React from 'react'
import Header from '../components/Layout/Header'
import EvenetsCard from '../components/Events/EvenetsCard'

const EventsPage = () => {
  return (
    <div>
        <Header activeHeading={4}/>
        <EvenetsCard active={true}/>
        <EvenetsCard active={true}/>

    </div>
  )
}

export default EventsPage