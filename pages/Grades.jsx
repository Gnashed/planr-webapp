import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Button } from 'react-bootstrap';
import GradesCard from '../components/GradesCard';
import { getGrades } from '../api/gradesData';

export default function Grades() {
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
        <GradesCard key={grade.firebaseKey} gradeObj={grade} onUpdate={fetchGrades} />
      ))}
    </div>
  );
}
