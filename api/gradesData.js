import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// CREATE Grades
const createGrades = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/grades.json`, {
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

// GET Grades
const getGrades = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/grades.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// GET Single Grade
const getSingleGrade = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/grades/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE Grades
const updateGrades = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/grades/${payload.firebaseKey}.json`, {
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

// DELETE Grades
const deleteSingleGrade = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/grades/${firebaseKey}.json`, {
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
  createGrades,
  getGrades,
  getSingleGrade,
  updateGrades,
  deleteSingleGrade,
};
