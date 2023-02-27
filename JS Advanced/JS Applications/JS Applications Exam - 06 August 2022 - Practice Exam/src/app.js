import page from "../../node_modules/page/page.mjs";
import { renderContent, renderNav } from "./middlewares/renderMiddleware.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { registerView } from "./views/registerView.js";
import { dashboardView } from "./views/dashboardView.js";
import { createOfferView } from "./views/createOfferView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { deleteView } from "./views/deleteView.js";
import { applyView } from "./views/applyView.js";

page(authMiddleware);
page(renderNav);
page(renderContent);

page("/", homeView);
page("/login", loginView);
page("/register", registerView);
page("/logout", logoutView);
page("/dashboard", dashboardView);
page("/create-offer", createOfferView);
page("/details/:id", detailsView);
page("/edit/:id", editView);
page("/delete/:id", deleteView);
page("/apply/:id", applyView);

page.start();
