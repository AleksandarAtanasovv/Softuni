import { html } from "../../node_modules/lit-html/lit-html.js";
import * as authService from "../services/authService.js";

const loginTemplate = (handleSubmit) => html`
  <section id="login">
    <div class="form">
      <h2>Login</h2>
      <form class="login-form" @submit=${handleSubmit}>
        <input type="text" name="email" id="email" placeholder="email" />
        <input type="password" name="password" id="password" placeholder="password" />
        <button type="submit">login</button>
        <p class="message">Not registered? <a href="#">Create an account</a></p>
      </form>
    </div>
  </section>
`;

export const loginView = (ctx) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = Object.fromEntries(new FormData(e.currentTarget));
    if (!email || !password) {
      alert("All fields must have information");
      return;
    }
    authService
      .login(email, password)
      .then((res) => {
        if (res.accessToken) {
          ctx.page.redirect("/dashboard");
        } else {
          throw new Error(res.message);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  ctx.render(loginTemplate(handleSubmit));
};
