import { html } from "../../node_modules/lit-html/lit-html.js";
import * as authService from "../services/authService.js";
const loginTemplate = (submitHandler) => html`
  <section id="login-view">
    <h2>Login</h2>
    <form id="login" @submit=${submitHandler}>
      <label>Email: <input type="text" name="email" /></label>
      <label>Password: <input type="password" name="password" /></label>
      <p class="notification"></p>
      <button>Login</button>
    </form>
  </section>
`;

export const loginView = (ctx) => {
  function submitHandler(e) {
    e.preventDefault();

    const { email, password } = Object.fromEntries(new FormData(e.currentTarget));
    if (!password || !email) {
      return alert("All fields must be filled");
    }
    authService.login(email, password).then((res) => {
      if (res.message) {
        alert(res.message);
      } else {
        ctx.page.redirect("/");
      }
    });
  }
  ctx.render(loginTemplate(submitHandler));
};
