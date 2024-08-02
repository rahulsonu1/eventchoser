
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Data } from './data';
import CardEvent from './component/CardEvent';
import Selected from './component/Selected';


const App = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);

  useEffect(() => {
    setEvents(Data);
    const savedSelectedList = JSON.parse(localStorage.getItem('selectedEvents')) || [];
    setSelectedEvents(savedSelectedList);
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedEvents', JSON.stringify(selectedEvents));
  }, [selectedEvents]);

  function handleSelect(event) {
    if (selectedEvents.length >= 3) {
      alert('You can only select up to 3 events.');
      return;
    }
    const conflictingEvent = selectedEvents.find(se =>
      (new Date(event.start_time) < new Date(se.end_time)) && (new Date(event.end_time) > new Date(se.start_time))
    );
    if (conflictingEvent) {
      alert('This event conflicts with one of your selected events.');
      return;
    }
    setSelectedEvents([...selectedEvents, event]);
  }

  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <h1>Event list</h1>
          {events.map((e) => (
            <CardEvent key={e.id} event={e} onSelect={handleSelect} />
          ))}
        </Col>
        <Col md={6}>
          <Selected selectedEvents={selectedEvents} setSelectedEvents={setSelectedEvents} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;



