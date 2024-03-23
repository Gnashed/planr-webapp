import React, { useState, useEffect } from 'react';
import ClassroomGradesCard from '../components/ClassroomGradesCard';
import { getGrades } from '../api/gradesData';

export default function Classrooms() {
  const [grades, setGrades] = useState([]);
  const fetchGrades = () => {
    getGrades().then(setGrades);
  };

  useEffect(() => {
    fetchGrades();
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
      <h2>Grades</h2>
      {grades.map((grade) => (
        <ClassroomGradesCard key={grade.firebaseKey} gradesObj={grade} onUpdate={fetchGrades} />
      ))}
    </div>
  );
}
