// import './App.css';
import { useState } from 'react';
import { useContext } from 'react';
import { EventContext } from './EventContext';

function AddNewEvent() {
  const DATE_STRING = 'dateString';
   const [events, setEvents] = useContext(EventContext);

  const getTheDay = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const payload = Object.fromEntries(data);

    setEvents([...events, payload.dateString]);
  }

  return (
    <div className="App">
      <form onSubmit={getTheDay}>
        <label>Date: </label>
        <input type='date' name={DATE_STRING}/>
        <button type='submit'>Submit</button>
      </form>
      <div>
        <ul>
          {events.map((theEvent, index) => {
              return <li key={index}>{theEvent}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default AddNewEvent;
