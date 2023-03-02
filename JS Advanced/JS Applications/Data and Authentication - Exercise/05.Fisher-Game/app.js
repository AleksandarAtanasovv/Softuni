import page from "../../node_modules/page/page.mjs";
import { checkIfLogged } from "./src/middlewares/authMiddleware.js";
import { renderContent, renderNavbar } from "./src/middlewares/renderMiddleware.js";
import { homeView } from "./src/views/homeView.js";
import { loginView } from "./src/views/loginView.js";
import { logoutView } from "./src/views/logoutView.js";
import { registerView } from "./src/views/registerView.js";

page(checkIfLogged);
page(renderNavbar);
page(renderContent);

page("/", homeView);
page("/login", loginView);
page("/register", registerView);
page("/logout", logoutView);
page.start();
