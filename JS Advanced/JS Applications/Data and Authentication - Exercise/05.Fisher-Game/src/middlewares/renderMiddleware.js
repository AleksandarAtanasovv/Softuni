import { render } from "../../node_modules/lit-html/lit-html.js";
import { navbarView } from "../views/navbarView.js";
const header = document.querySelector(".header-nav");
const mainEl = document.querySelector("main");
export const renderNavbar = (ctx, next) => {
  render(navbarView(ctx), header);
  next();
};
export const renderContent = (ctx, next) => {
  ctx.render = (viewResult) => {
    render(viewResult, mainEl);
  };
  next();
};
