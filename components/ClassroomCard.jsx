import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { deleteSingleClassroom } from '../api/classroomData';

export default function ClassroomCard({ classroomObj, onUpdate }) {
  const deleteClassroom = () => {
    if (window.confirm(`Would you like to delete ${classroomObj.subject}?`)) {
      deleteSingleClassroom(classroomObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{classroomObj.subject}</Card.Title>
          <Card.Text>
            {classroomObj.grade_level}
          </Card.Text>
          <Card.Text>
            Honors or AP?
          </Card.Text>
          <Card.Text>
            Attendance
          </Card.Text>

          <Button variant="primary">Edit</Button>
          <Button variant="danger" onClick={deleteClassroom}>Remove</Button>
        </Card.Body>
      </Card>
    </>
  );
}

ClassroomCard.propTypes = {
  classroomObj: PropTypes.shape({
    subject: PropTypes.string,
    grade_level: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};