import React from 'react';
import ClassroomForm from '../../components/forms/ClassroomForm';
import StudentForm from '../../components/forms/StudentForm';

export default function newClassroom() {
  return (
    <>
      <ClassroomForm />;
      <StudentForm />;
    </>
  );
}
