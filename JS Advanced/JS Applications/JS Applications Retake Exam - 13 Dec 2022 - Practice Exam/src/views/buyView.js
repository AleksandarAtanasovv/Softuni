import * as productsService from "../services/productsService.js";

export const buyView = (ctx) => {
  productsService.buy(ctx.user.accessToken, ctx.params.id).then((result) => {
    ctx.page.redirect(`/details/${ctx.params.id}`);
  });
};
