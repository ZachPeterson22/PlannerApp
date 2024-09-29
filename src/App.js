import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Layout from './Layout.js';
import Calendar from './Calendar.js';
import AddNewEvent from './AddNewEvent.js';
import Notes from './Notes.js';
import './index.css';
import { EventContext } from './EventContext.js';

export default function App() {
  const [events, setEvents] = useState(['2024-09-05', '2024-09-06', '2024-09-07']);
  
  return (
    <BrowserRouter>
    <EventContext.Provider value={[events, setEvents]}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Calendar />} />
          <Route path='addEvent' element={<AddNewEvent />} />
          <Route path='notes' element={<Notes />} />
        </Route>
      </Routes>
    </EventContext.Provider>
  </BrowserRouter>
  )
}