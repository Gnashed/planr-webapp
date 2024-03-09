// // import { signOut } from '../utils/auth';
// import { Button } from 'react-bootstrap';
// import Link from 'next/link';

import React, { useEffect, useState } from 'react';
import StudentCard from '../components/StudentCard';
import { getStudents } from '../api/studentData';

function Home() {
  const [students, setStudents] = useState([]);

  const fetchStudents = () => {
    getStudents().then(setStudents);
  };

  useEffect(() => {
    fetchStudents();
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
      <h2>Classroom</h2>

      {students.map((student) => (
        <StudentCard key={student.firebaseKey} studentObj={student} onUpdate={fetchStudents} />
      ))}
    </div>
  );
}

export default Home;
