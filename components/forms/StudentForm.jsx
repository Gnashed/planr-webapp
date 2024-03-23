import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { createStudent, updateStudent } from '../../api/studentData';

const IntitialFormState = {
  first_name: '',
  last_name: '',
  grade_level: '',
};

export default function StudentForm({ obj }) {
  const [formInput, setFormInput] = useState(IntitialFormState);
  const router = useRouter();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    // }
    setFormInput((prevState) => ({
      ...prevState, // ... to create a copy of the prev. state.
      [name]: value, // Updates the name property with the new value that the user entered.
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (obj.firebaseKey) {
      // TODO: Come back to this. Need to route user back to the classroom
      updateStudent(formInput).then(() => router.push(`/classroom/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput };
      console.warn(payload);
      createStudent(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateStudent(patchPayload).then(() => {
          // TODO: WIP, getting a url /classroom/undefined.
          router.push(`/classroom/${obj.firebaseKey}`);
        });
      });
    }
  };

  return (
    <>
      {/* Step 4 Add React Bootstrap Form */}
      <Form onSubmit={handleSubmit}>
        <h2>Student Info</h2>

        {/* Name */}
        <FloatingLabel controlId="floatingInput1" label="First name" className="mb-3">
          <Form.Control
            type="text"
            name="first_name"
            value={formInput.first_name}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput2" label="Last name" className="mb-3">
          <Form.Control
            type="text"
            name="last_name"
            value={formInput.last_name}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        {/* Grade Level: */}
        <FloatingLabel controlId="floatingInput3" label="Grade level" className="mb-3">
          <Form.Control
            type="text"
            name="grade_level"
            value={formInput.grade_level}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        {/* SUBMIT BUTTON  */}
        <Button variant="primary" type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Student</Button>
      </Form>
    </>
  );
}

// Step 5: Props
StudentForm.propTypes = {
  obj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    grade_level: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

// Step 5.1: Set default props
StudentForm.defaultProps = {
  obj: IntitialFormState,
};
