import * as authService from "../services/authService.js";

export const logoutView = (ctx) => {
  authService.logout(ctx.user.accessToken).then((result) => {
    ctx.page.redirect("/products");
  });
};
