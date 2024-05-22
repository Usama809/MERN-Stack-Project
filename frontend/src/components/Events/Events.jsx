import React from 'react';
import styles from '../../styles/styles';
import EventCard from "./EvenetsCard.jsx";
const Events = () => {
  return (
    <div>
    <div className={`${styles.section}`}>
      <div className={`${styles.heading}`}>
        <h1>Events</h1>
      </div>
      <div className='w-full grid'>
        <EventCard/>
      </div>
      </div>
  </div>
  )
}

export default Events