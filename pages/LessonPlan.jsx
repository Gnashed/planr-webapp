import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import LessonPlanCard from '../components/LessonPlanCard';
import { getLessonPlan } from '../api/lessonPlanData';

export default function LessonPlans() {
  const [lessons, setLessons] = useState([]);
  const fetchLessons = () => {
    getLessonPlan().then(setLessons);
  };

  useEffect(() => {
    fetchLessons();
  }, []);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h2>Lesson Plans</h2>
      {lessons.map((lesson) => (
        <LessonPlanCard key={lesson.firebaseKey} lessonPlanObj={lesson} onUpdate={fetchLessons} />
      ))}
      <Link href="/lessonplan/new" passHref>
        <Button variant="primary">Create a lesson</Button>
      </Link>
    </div>
  );
}
