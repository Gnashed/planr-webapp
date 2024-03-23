import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// CREATE Lesson Plan
const createLessonPlan = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/lesson_plan.json`, {
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

// GET Lesson Plan
const getLessonPlan = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/lesson_plan.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// GET Single Lesson Plan
const getSingleLessonPlan = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/lesson_plan/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE Lesson Plan
const updateLessonPlan = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/lesson_plan/${payload.firebaseKey}.json`, {
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

// DELETE Lesson Plan
const deleteSingleLessonPlan = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/lesson_plan/${firebaseKey}.json`, {
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
  createLessonPlan,
  getLessonPlan,
  getSingleLessonPlan,
  updateLessonPlan,
  deleteSingleLessonPlan,
};
