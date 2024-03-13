import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { createClassroom, updateClassroom } from '../../api/classroomData';

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
  grade_level: '',
  honors_or_AP: '',
};

// Step 2: Classroom Form component.
export default function ClassroomForm({ obj }) {
  // Step 2.1: Add a useState. Pass in IntitialFormState object as the initial state
  const [formInput, setFormInput] = useState(IntitialFormState);
  const router = useRouter();

  // Step 2.2: Add a useEffect. If an 'id' property exist in the obj, update the formInput with the values from the prop.
  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj]);

  // Step 2.3: Dynamically updates the formInput state based on whatever the user typed in.
  const handleChange = (event) => {
    const { name, value } = event.target; // The input field. This is the element that triggered the event that's being listened out for.
    // TODO: WIP validating the value for each checkbox.
    // if(value === true) {

    // }
    setFormInput((prevState) => ({ // prevState = taco. We're taking the previous state of the form...
      ...prevState, // ... to create a copy of the prev. state.
      [name]: value, // Updates the name property with the new value that the user entered.
    }));
  };

  // Step 2.4: Runs when the form submit event is triggered.
  const handleSubmit = (event) => {
    event.preventDefault(); // Keeps the page from reloading since that's the default behavior of submitting a form.
    if (obj.firebaseKey) { // updating an existing classroom
      // Updates the Classroom (if one exists), then routes the user to the classrooms page.
      updateClassroom(formInput).then(() => router.push('/Classrooms'));
    } else { // creating a new classroom.
      const payload = { ...formInput };
      console.warn(payload);
      // Create the classroom, then route user to classroom page.
      createClassroom(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateClassroom(patchPayload).then(() => {
          router.push('/Classrooms');
        });
      });
    }
  };

  return (
    <>
      {/* Step 4 Add React Bootstrap Form */}
      <Form onSubmit={handleSubmit}>
        <h2>Classroom Info</h2>

        {/* Subject */}
        <FloatingLabel controlId="floatingInput1" label="What subject are you teaching?" className="mb-3">
          <Form.Control
            type="text"
            name="subject"
            value={formInput.subject}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        {/* Grade Level */}
        <FloatingLabel controlId="floatingInput2" label="Grade level" className="mb-3">
          <Form.Control
            type="text"
            name="grade_level"
            value={formInput.grade_level}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        {/* AP or Honors, TODO: Come back to this. */}
        <p>AP/Honors? </p>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Yes"
              name="honors_or_AP"
              type={type}
              id={`inline-${type}-1`}
              value={formInput.honors_or_AP}
            />
            <Form.Check
              inline
              label="No"
              name="honors_or_AP"
              type={type}
              id={`inline-${type}-2`}
              value={formInput.honors_or_AP}
              defaultChecked
            />
          </div>
        ))}

        {/* SUBMIT BUTTON  */}
        <Button variant="primary" type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Classroom</Button>
      </Form>
    </>
  );
}

// Step 5: Props
ClassroomForm.propTypes = {
  obj: PropTypes.shape({
    subject: PropTypes.string,
    grade_level: PropTypes.string,
    honors_or_AP: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }),
};

// Step 5.1: Set default props
ClassroomForm.defaultProps = {
  obj: IntitialFormState,
};
