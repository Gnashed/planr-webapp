import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { createClassroom, updateSingleClassroom } from '../../api/classroomData';

/*

Objective - To create a classroom by gathering the necessary data via form.

Once I get the data:
    - CREATE a new classroom.
    - Show the StudentForm
        - CREATE a new student
    - Route user to Classroom page.

*/

// Step 1: Set initial state for the form.
const IntitialFormState = {
  subject: '',
  students: '',
  grade_level: '',
  APorHonors: '',
};

// Step 2: Classroom Form component.
export default function ClassroomForm({ obj }) {
  // Step 2.1: Add a useState. Pass in IntitialFormState object as the initial state
  const [formInput, setFormInput] = useState(IntitialFormState);
  const router = useRouter();

  // Step 2.2: Add a useEffect. If an 'id' property exist in the obj, update the formInput with the values from the prop.
  useEffect(() => {
    if (obj.id) setFormInput(obj);
  }, [obj]);

  // Step 2.3: Dynamically updates the formInput state based on whatever the user typed in.
  const handleChange = (event) => {
    const { name, value } = event.target; // The input field. This is the element that triggered the event that's being listened out for.
    setFormInput((prevState) => ({ // prevState = taco. We're taking the previous state of the form...
      ...prevState, // ... to create a copy of the prev. state.
      [name]: value, // Updates the name property with the new value that the user entered.
    }));
  };

  // Step 2.4: Runs when the form submit event is triggered.
  const handleSubmit = (event) => {
    event.preventDefault(); // Keeps the page from reloading since that's the default behavior of submitting a form.
    if (obj.id) { // updating an existing classroom
      // TODO: Add logic that updates the Classroom (if one exists), then routes the user to the classroom object's id.
      updateSingleClassroom(formInput).then(() => router.push(`/classroom/${obj.id}`));
    } else { // creating a new trip.
      const payload = { ...formInput };
      // TODO: Add logic to create the classroom, then router user to
      createClassroom(payload).then(() => {
        router.push('/classroom'); // TODO: Might have to come back to this line.
      });
    }
  };

  return (
    <>
      {/* Step 4 Add React Bootstrap Form */}
      <Form onSubmit={handleSubmit}>
        <h2>Classroom Info</h2>
        {/* Subject */}
        <FloatingLabel controlId="floatingInput1" label="Subject" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter Subject"
            name="subject"
            value={formInput.subject}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        {/* Students */}
        <FloatingLabel controlId="floatingInput2" label="Students" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Number of students"
            name="students"
            value={formInput.students}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        {/* Grade Level */}
        <FloatingLabel controlId="floatingInput3" label="Grade level" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Grade Level:"
            name="grade_level"
            value={formInput.grade_level}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        {/* AP or Honors, TODO: Come back to this. */}
        <p>AP/Honors: </p>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="No"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="AP"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="Honors"
              name="group1"
              type={type}
              id={`inline-${type}-3`}
            />
          </div>
        ))}

        {/* SUBMIT BUTTON  */}
        <Button variant="primary" type="submit">{obj.id ? 'Update' : 'Create'} Classroom</Button>
      </Form>
    </>
  );
}

// Step 5: Props
ClassroomForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.string,
    subject: PropTypes.string,
    students: PropTypes.string,
    grade_level: PropTypes.string,
    APorHonors: PropTypes.string,
  }),
};

// Step 5.1: Set default props
ClassroomForm.defaultProps = {
  obj: IntitialFormState,
};
