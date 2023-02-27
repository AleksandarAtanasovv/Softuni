import * as request from "./requester.js";

const baseUrl = "http://localhost:3030";

const saveUser = (user) => {
  if (user.accessToken) localStorage.setItem("user", JSON.stringify(user));
};

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
export const getUser = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
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
