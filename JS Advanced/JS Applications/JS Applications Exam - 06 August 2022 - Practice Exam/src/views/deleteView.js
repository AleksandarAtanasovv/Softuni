import * as jobOfferService from "../services/jobOfferService.js";
export const deleteView = async (ctx) => {
  try {
    await jobOfferService.del(ctx.user.accessToken, ctx.params.id);
    ctx.page.redirect("/dashboard");
  } catch (err) {
    alert(err.message);
  }
};
