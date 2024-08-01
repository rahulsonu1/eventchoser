import React,{useState,useEffect} from 'react'
import { Data } from './data'
import CardEvent from './component/CardEvent'

const App = () => {
    const [events,setEvents]=useState([])
    const [selectedEvent,setSelectedEvent]=useState([])

    useEffect(()=>{
        setEvents(Data)
    })

    console.log(events)
  return (
    <div>
      <h1>Event list</h1>
      {events.map((e)=>{
      return (
        <CardEvent key={e.id} event={e}></CardEvent>
      )})}
      
    </div>
  )
}

export default App
