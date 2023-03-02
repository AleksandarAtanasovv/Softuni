import * as authService from "../services/authService.js";
export const logoutView = (ctx) => {
  try {
    authService.logoutUser(ctx.user);
    ctx.page.redirect("/");
  } catch (err) {
    alert(err.message);
  }
};
