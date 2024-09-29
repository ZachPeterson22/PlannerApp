// import './App.css';
import { useState } from 'react';

function AddNewEvent() {
  const DATE_STRING = 'dateString';
   const [days, setDays] = useState([]);

  const getTheDay = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const payload = Object.fromEntries(data);

    setDays([...days, payload])
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
          {days.map((day, index) => 
            <li key={index}>{day.dateString}</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default AddNewEvent;
