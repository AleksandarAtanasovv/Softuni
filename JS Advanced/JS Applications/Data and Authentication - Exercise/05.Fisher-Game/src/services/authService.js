import * as request from "./requester.js";
const baseUrl = "http://localhost:3030";

function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}
export function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}
export const login = (email, password) => {
  return request.post(`${baseUrl}/users/login`, { email, password }).then((user) => {
    saveUser(user);
    return user;
  });
};
export const register = (email, password) => {
  return request.post(`${baseUrl}/users/register`, { email, password }).then((user) => {
    saveUser(user);
    return user;
  });
};
export const logoutUser = (user) => {
  localStorage.removeItem("user");
  fetch(`${baseUrl}/users/logout`, {
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": user.accessToken,
    },
  }).then((res) => {
    return res;
  });
};
