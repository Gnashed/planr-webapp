import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { deleteSingleStudent } from '../api/studentData';

export default function StudentCard({ obj, onUpdate }) {
  const deleteStudent = () => {
    if (window.confirm(`Would you like to delete ${obj.first_name}?`)) {
      deleteSingleStudent(obj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{obj.first_name} {obj.last_name}</Card.Title>
          <Card.Text>
            {obj.grade_level}
          </Card.Text>
          <Card.Text>
            {obj.average_grade}
          </Card.Text>
          <Card.Text>
            Attendance
          </Card.Text>

          <Button variant="primary">Edit</Button>
          <Button variant="danger" onClick={deleteStudent}>Remove</Button>
        </Card.Body>
      </Card>
    </>
  );
}

StudentCard.propTypes = {
  obj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    grade_level: PropTypes.string,
    average_grade: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
