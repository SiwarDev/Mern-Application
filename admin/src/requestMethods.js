import axios from "axios";

const BASE_URL = "http://localhost:1000/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTk3NTE2NTc5MTYyOGQ4YWM0YjU0MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzE4Mjc4NywiZXhwIjoxNjQzNDQxOTg3fQ.7ngBOXi4TxIJ1EubcHQsIQjk36a1mthCuJ49h_TETa8";
//const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});



//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTk3NTE2NTc5MTYyOGQ4YWM0YjU0MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzE4Mjc4NywiZXhwIjoxNjQzNDQxOTg3fQ.7ngBOXi4TxIJ1EubcHQsIQjk36a1mthCuJ49h_TETa8
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTk3NTE2NTc5MTYyOGQ4YWM0YjU0MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjY5MDIwNiwiZXhwIjoxNjQyOTQ5NDA2fQ.fQS8PQtLzl8s1PXzr1RadYGTf0ZG3IArFVh3kV7foIE
// JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken