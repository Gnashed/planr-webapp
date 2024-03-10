// // // import { signOut } from '../utils/auth';

// import React, { useEffect, useState } from 'react';
// import StudentCard from '../components/StudentCard';
// import { getStudents } from '../api/studentData';
// // import { Button } from 'react-bootstrap';
// // import Link from 'next/link';

// function Home() {
//   const [students, setStudents] = useState([]);

//   const fetchStudents = () => {
//     getStudents().then(setStudents);
//   };

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   return (
//     <div
//       className="text-center d-flex flex-column justify-content-center align-content-center"
//       style={{
//         height: '90vh',
//         padding: '30px',
//         maxWidth: '400px',
//         margin: '0 auto',
//       }}
//     >
//       <h2>Classroom</h2>

//       {students.map((student) => (
//         <StudentCard key={student.firebaseKey} studentObj={student} onUpdate={fetchStudents} />
//       ))}
//     </div>
//   );
// }

// export default Home;
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';

export default function Home() {
  const { user } = useAuth();

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
      <h1>Hello {user.displayName}! </h1>

      <Link href="/classroom/new" passHref>
        <Button variant="success">Create Classroom</Button>
      </Link>
      <Link href="classroom/viewclassrooms" passHref>
        <Button variant="primary" className="mt-1">Classrooms</Button>
      </Link>
    </div>
  );
}
