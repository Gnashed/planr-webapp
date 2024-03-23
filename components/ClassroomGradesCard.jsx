// import React from 'react';
// import { Card, Button } from 'react-bootstrap';
// import PropTypes from 'prop-types';
// import Link from 'next/link';
// import { deleteSingleGrade } from '../api/gradesData';

// export default function ClassroomGradesCard({ gradeObj, onUpdate }) {
//   const deleteGrade = () => {
//     if (window.confirm(`Would you like to delete ${gradeObj.grade}?`)) {
//       deleteSingleGrade(gradeObj.firebaseKey).then(() => onUpdate());
//     }
//   };

//   return (
//     <>
//       <Card style={{ width: '18rem' }}>
//         <Card.Body>
//           <Card.Title>#########</Card.Title>
//           <Card.Text>
//             #########
//           </Card.Text>
//           <Card.Text>
//             #########
//           </Card.Text>

//           <Link href={`/grades/edit/${gradeObj.firebaseKey}`} passHref>
//             <Button variant="primary">Edit</Button>
//           </Link>
//           <Button variant="danger" onClick={deleteGrade}>Remove</Button>
//         </Card.Body>
//       </Card>
//     </>
//   );
// }

// ClassroomGradesCard.propTypes = {
//   gradeObj: PropTypes.shape({
//     firebaseKey: PropTypes.string,
//   }).isRequired,
//   onUpdate: PropTypes.func.isRequired,
// };
