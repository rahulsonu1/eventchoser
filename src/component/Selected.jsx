import React from "react";
import { Card, Button } from "react-bootstrap";

const Selected = ({ selectedEvents, setSelectedEvents }) => {
  function handleRemove(event) {
    const updatedEvents = selectedEvents.filter((se) => se.id !== event.id);
    setSelectedEvents(updatedEvents);
    localStorage.setItem('selectedEvents', JSON.stringify(updatedEvents)); 
    
  }

  return (
    <div>
      <h2>Selected events</h2>
      {selectedEvents.map((m) => (
        <Card key={m.id} className="m-4" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{m.event_name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{m.event_category}</Card.Subtitle>
            <Card.Text>
              <p>Start Time: {m.start_time}</p>
              <p>End Time: {m.end_time}</p>
            </Card.Text>
            <Button onClick={() => handleRemove(m)}>Remove</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Selected;

