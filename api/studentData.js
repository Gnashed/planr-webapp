import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// CREATE Student
const createStudent = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/student.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// GET Student
const getStudents = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/student.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// GET Single Student
const getSingleStudent = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/student/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE Student
const updateStudent = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/student/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// DELETE Student
const deleteSingleStudent = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/student/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application.json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  createStudent,
  getStudents,
  getSingleStudent,
  updateStudent,
  deleteSingleStudent,
};
