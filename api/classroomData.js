import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// CREATE Classroom
const createClassroom = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/classroom.json`, {
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

// GET Classroom
const getClassrooms = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/classroom.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// GET Single Classroom
const getSingleClassroom = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/classroom/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE Classroom
const updateClassroom = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/classroom/${payload.firebaseKey}.json`, {
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

// DELETE Classroom
const deleteSingleClassroom = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/classroom/${firebaseKey}.json`, {
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
  createClassroom,
  getClassrooms,
  getSingleClassroom,
  updateClassroom,
  deleteSingleClassroom,
};
