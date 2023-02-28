import page from "../../node_modules/page/page.mjs";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import { renderContent, renderNav } from "./middlewares/renderMiddleware.js";
import { buyView } from "./views/buyView.js";
import { createView } from "./views/createView.js";
import { deleteView } from "./views/deleteView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { productsView } from "./views/productsView.js";
import { registerView } from "./views/registerView.js";

page(authMiddleware);
page(renderNav);
page(renderContent);

page("/", homeView);
page("/login", loginView);
page("/register", registerView);
page("/logout", logoutView);
page("/products", productsView);
page("/details/:id", detailsView);
page("/create/", createView);
page("/edit/:id", editView);
page("/delete/:id", deleteView);
page("/buy/:id", buyView);
page.start();
