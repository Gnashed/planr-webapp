import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function StudentCard() {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Student Name</Card.Title>
          <Card.Text>
            Grade Level
          </Card.Text>
          <Card.Text>
            Average Grade
          </Card.Text>
          <Card.Text>
            Attendance
          </Card.Text>

          <Button variant="primary">Edit</Button>
          <Button variant="danger">Remove</Button>
        </Card.Body>
      </Card>
    </>
  );
}
