import * as productsService from "../services/productsService.js";

export const deleteView = (ctx) => {
  productsService.del(ctx.user.accessToken, ctx.params.id).then((result) => {
    ctx.page.redirect("/products");
  });
};
