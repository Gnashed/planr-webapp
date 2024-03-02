import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// TODO: CREATE Classroom
const createClassroom = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/#######`, {
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

// TODO: GET Classroom
const getClassroom = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/###/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const updateClassroom = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/classroom/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export { createClassroom, getClassroom, updateClassroom };
