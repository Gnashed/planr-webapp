import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleClassroom } from '../../../api/classroomData';
import ClassroomForm from '../../../components/forms/ClassroomForm';

export default function UpdateClassroom() {
  const [updateClassroomItem, setUpdateClassroomItem] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleClassroom(firebaseKey).then(setUpdateClassroomItem);
  }, [firebaseKey]);

  return <ClassroomForm obj={updateClassroomItem} />;
}
