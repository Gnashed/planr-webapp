import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { deleteSingleLessonPlan } from '../api/lessonPlanData';

export default function LessonPlanCard({ lessonPlanObj, onUpdate }) {
  const deleteLesson = () => {
    if (window.confirm(`Would you like to delete ${lessonPlanObj.lesson}?`)) {
      deleteSingleLessonPlan(lessonPlanObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Link href={`/lessonplan/${lessonPlanObj.firebaseKey}`} passHref>
          <Card.Body>
            <Card.Title>{lessonPlanObj.day}</Card.Title>
            <Card.Text>
              {lessonPlanObj.lesson}
            </Card.Text>
            <Card.Text>
              Duration: {lessonPlanObj.duration} Minutes
            </Card.Text>

            <Link href={`/lessonplan/edit/${lessonPlanObj.firebaseKey}`} passHref>
              <Button variant="primary">Edit</Button>
            </Link>
            <Button variant="danger" onClick={deleteLesson}>Remove</Button>
          </Card.Body>
        </Link>
      </Card>
    </>
  );
}

LessonPlanCard.propTypes = {
  lessonPlanObj: PropTypes.shape({
    classroom_id: PropTypes.string,
    day: PropTypes.string,
    duration: PropTypes.string,
    lesson: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
