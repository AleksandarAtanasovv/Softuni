import * as authService from "../services/authService.js";

export const checkIfLogged = (ctx, next) => {
  const user = authService.getUser();
  if (user) {
    ctx.user = user;
  }
  next();
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
