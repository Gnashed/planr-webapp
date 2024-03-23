import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { deleteSingleStudent } from '../api/studentData';

export default function StudentCard({ studentObj, onUpdate }) {
  const deleteStudent = () => {
    if (window.confirm(`Would you like to delete ${studentObj.first_name}?`)) {
      deleteSingleStudent(studentObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{studentObj.first_name} {studentObj.last_name}</Card.Title>
          <Card.Text>
            Grade Level: {studentObj.grade_level}
          </Card.Text>
          {/* <Card.Text>
            Average Grade: {studentObj.average_grade} TODO:
          </Card.Text> */}
          <Card.Text>
            Attendance
          </Card.Text>

          <Link href={`/student/edit/${studentObj.firebaseKey}`} passHref>
            <Button variant="primary">Edit</Button>
          </Link>
          <Button variant="danger" onClick={deleteStudent}>Remove</Button>
        </Card.Body>
      </Card>
    </>
  );
}

StudentCard.propTypes = {
  studentObj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    grade_level: PropTypes.string,
    // average_grade: PropTypes.string, TODO:
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
