import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';

/* Notes:

Objective - To create a classroom by gathering the necessary data via form.

Once I get the data:
    - CREATE a new classroom.
    - Show the StudentForm
        - CREATE a new student
    - Route user to Classroom page.

*/
// Step 1: Set initial state for the form.
// const IntitialFormState = {
//   subject: '',
//   students: '',
//   grade_level: '',
//   APorHonors: '', // TODO: Should be radio buttons. WIP
// };

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

  // Step 3: Runs when the form submit event is triggered.
  const handleSubmit = (event) => {
    event.preventDefault();
    if (obj.id) {
      // TODO: Add logic that updates the Classroom, then routes the user to the classroom object's id.
    } else {
      const payload = { ...formInput };
      // TODO: Add logic to create the classroom's payload, then route the user to the classroom.
    }
  };
}

return (
  <>
    <p>Hello</p>
  </>
);
