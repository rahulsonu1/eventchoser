import React from 'react'
import { Card,Button } from 'react-bootstrap'


const CardEvent = ({event, onSelect , isSelected}) => {
  return (
    <Card className='m-4' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{event.event_name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{event.event_category}</Card.Subtitle>
        <Card.Text>
          <p>Start Time :{event.start_time}</p>
          <p>End Time :{event.end_time}</p>
        </Card.Text>
        <Button onClick={() => onSelect(event)} disabled={isSelected} >
        Add
      </Button>
      </Card.Body>
      
    </Card>
  )
}

export default CardEvent
