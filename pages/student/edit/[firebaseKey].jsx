import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleStudent } from '../../../api/studentData';
import StudentForm from '../../../components/forms/StudentForm';

export default function UpdateClassroom() {
  const [updateStudentItem, setUpdateStudentItem] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleStudent(firebaseKey).then(setUpdateStudentItem);
    console.warn(firebaseKey);
  }, [firebaseKey]);

  return <StudentForm obj={updateStudentItem} />;
}
