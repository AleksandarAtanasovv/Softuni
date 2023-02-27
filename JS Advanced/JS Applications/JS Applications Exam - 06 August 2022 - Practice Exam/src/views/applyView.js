import * as jobOfferService from "../services/jobOfferService.js";

export const applyView = async (ctx) => {
  const res = await jobOfferService.apply(ctx.params.id, ctx.user.accessToken);
  ctx.page.redirect(`/details/${ctx.params.id}`);
};
