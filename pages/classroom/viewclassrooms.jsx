import React, { useState, useEffect } from 'react';
import ClassroomCard from '../../components/ClassroomCard';
import { getClassrooms } from '../../api/classroomData';

export default function ViewClassrooms() {
  const [classrooms, setClassrooms] = useState([]);
  const fetchClassrooms = () => {
    getClassrooms().then(setClassrooms);
  };

  useEffect(() => {
    fetchClassrooms();
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
      <h2>Classrooms</h2>
      {classrooms.map((classroom) => (
        <ClassroomCard key={classroom.firebaseKey} classroomObj={classroom} onUpdate={fetchClassrooms} />
      ))}
    </div>
  );
}
