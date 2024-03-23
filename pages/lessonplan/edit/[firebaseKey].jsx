import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleLessonPlan } from '../../../api/lessonPlanData';
import LessonPlanForm from '../../../components/forms/LessonPlanForm';

export default function UpdateLessonPlan() {
  const [updateLessonPlanItem, setUpdateLessonPlanItem] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleLessonPlan(firebaseKey).then(setUpdateLessonPlanItem);
    console.warn(firebaseKey);
  }, [firebaseKey]);

  return <LessonPlanForm obj={updateLessonPlanItem} />;
}
