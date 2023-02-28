import * as request from "../services/requester.js";
const baseUrl = "http://localhost:3030";

export const saveUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};
export const getUser = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
};
export const removeUser = () => {
  localStorage.removeItem("user");
};
export const register = (email, password) => {
  return request.post(`${baseUrl}/users/register`, { email, password }).then((user) => {
    saveUser(user);
    return user;
  });
};
export const login = (email, password) => {
  return request.post(`${baseUrl}/users/login`, { email, password }).then((user) => {
    saveUser(user);
    return user;
  });
};
export const logout = (accessToken) => {
  return request.get(`${baseUrl}/users/logout`, {}, true, accessToken).then(() => {
    removeUser();
  });
};
