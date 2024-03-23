import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { createLessonPlan, updateLessonPlan } from '../../api/lessonPlanData';

const IntitialFormState = {
  lesson: '',
  day: '',
  duration: '',
};

export default function LessonPlanForm({ obj }) {
  const [formInput, setFormInput] = useState(IntitialFormState);
  const router = useRouter();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInput((prevState) => ({
      ...prevState, // ... to create a copy of the prev. state.
      [name]: value, // Updates the name property with the new value that the user entered.
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (obj.firebaseKey) {
      // TODO: Come back to this. Need to route user back to the lesson plan
      updateLessonPlan(formInput).then(() => router.push(`/lessonplan/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput };
      createLessonPlan(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateLessonPlan(patchPayload).then(() => {
          // TODO: WIP, getting a url /lessonplan/undefined.
          router.push('/LessonPlan');
        });
      });
    }
  };

  return (
    <>
      {/* Step 4 Add React Bootstrap Form */}
      <Form onSubmit={handleSubmit}>
        <h2>Lesson Plan Form</h2>

        {/* Lesson Name */}
        <FloatingLabel controlId="floatingInput1" label="Lesson" className="mb-3">
          <Form.Control
            type="text"
            name="lesson"
            value={formInput.lesson}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        {/* Day of Lesson */}
        <FloatingLabel controlId="floatingInput2" label="Day" className="mb-3">
          <Form.Control
            type="text"
            name="day"
            value={formInput.day}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        {/* Duration */}
        <FloatingLabel controlId="floatingInput3" label="Duration (minutes)" className="mb-3">
          <Form.Control
            type="text"
            name="duration"
            value={formInput.duration}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        {/* SUBMIT BUTTON  */}
        <Button variant="primary" type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Lesson</Button>
      </Form>
    </>
  );
}

// Step 5: Props
LessonPlanForm.propTypes = {
  obj: PropTypes.shape({
    lesson: PropTypes.string,
    day: PropTypes.string,
    duration: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

// Step 5.1: Set default props
LessonPlanForm.defaultProps = {
  obj: IntitialFormState,
};
