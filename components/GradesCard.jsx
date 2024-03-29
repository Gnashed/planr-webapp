import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { deleteSingleGrade } from '../api/gradesData';

export default function GradesCard({ gradeObj, onUpdate }) {
  const deleteGrade = () => {
    if (window.confirm(`Would you like to delete ${gradeObj.student_id}'s grade?`)) {
      deleteSingleGrade(gradeObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <>
      <Card style={
        {
          width: '30rem',
          backgroundColor: '#222222',
          color: 'white',
        }
      }
      >
        <Card.Body>
          {/* TODO: */}
          <Card.Title>Student Name</Card.Title>

          <Card.Text>
            Classwork: {gradeObj.classwork}
          </Card.Text>
          <Card.Text>
            Homework: {gradeObj.homework}
          </Card.Text>
          <Card.Text>
            Quizzes: {gradeObj.quizzes}
          </Card.Text>
          <Card.Text>
            Projects: {gradeObj.projects}
          </Card.Text>
          <Card.Text>
            Exams: {gradeObj.exams}
          </Card.Text>

          <Link href={`/grades/edit/${gradeObj.firebaseKey}`} passHref>
            <Button variant="primary">Edit</Button>
          </Link>

          <Button variant="danger" onClick={deleteGrade}>Remove</Button>
        </Card.Body>
      </Card>
    </>
  );
}

GradesCard.propTypes = {
  gradeObj: PropTypes.shape({
    student_id: PropTypes.string,
    classwork: PropTypes.string,
    homework: PropTypes.string,
    quizzes: PropTypes.string,
    projects: PropTypes.string,
    exams: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
