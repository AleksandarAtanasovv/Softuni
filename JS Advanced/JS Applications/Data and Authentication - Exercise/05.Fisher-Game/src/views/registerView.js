import { html } from "../../node_modules/lit-html/lit-html.js";
import * as authService from "../services/authService.js";

const registerTemplate = (submitHandler) => html`
  <section id="register-view">
    <h2>Register</h2>
    <form id="register" @submit=${submitHandler}>
      <label>Email: <input type="text" name="email" /></label>
      <label>Password: <input type="password" name="password" /></label>
      <label>Repeat: <input type="password" name="rePass" /></label>
      <p class="notification"></p>
      <button>Register</button>
    </form>
  </section>
`;

export const registerView = (ctx) => {
  function submitHandler(e) {
    e.preventDefault();

    const { email, password, rePass } = Object.fromEntries(new FormData(e.currentTarget));
    if (!password || !email) {
      return alert("All fields must be filled");
    }
    if (password != rePass) {
      return alert("Passwords must match");
    }
    authService.register(email, password).then((res) => {
      if (res.message) {
        alert(res.message);
      } else {
        ctx.page.redirect("/");
      }
    });
  }
  ctx.render(registerTemplate(submitHandler));
};
