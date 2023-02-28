import { render } from "../../node_modules/lit-html/lit-html.js";
import { navigationView } from "../views/navigationView.js";

const header = document.querySelector(".header-nav");
const mainContent = document.querySelector("main");

export const renderNav = (ctx, next) => {
  render(navigationView(ctx), header);
  next();
};

export const renderContent = (ctx, next) => {
  ctx.render = (templateResult) => {
    render(templateResult, mainContent);
  };
  next();
};
