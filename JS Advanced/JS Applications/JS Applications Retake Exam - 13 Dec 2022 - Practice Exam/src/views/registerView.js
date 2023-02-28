import { html, nothing, reparentNodes } from "../../node_modules/lit-html/lit-html.js";
import * as authService from "../services/authService.js";
const registerTemplate = (submitHandler) => html`
  <section id="register">
    <div class="form">
      <h2>Register</h2>
      <form class="register-form" @submit=${submitHandler}>
        <input type="text" name="email" id="register-email" placeholder="email" />
        <input type="password" name="password" id="register-password" placeholder="password" />
        <input
          type="password"
          name="re-password"
          id="repeat-password"
          placeholder="repeat password"
        />
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="#">Login</a></p>
      </form>
    </div>
  </section>
`;

export const registerView = (ctx) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const {
      email,
      password,
      ["re-password"]: rePass,
    } = Object.fromEntries(new FormData(e.currentTarget));
    if (!email || !password || !rePass) {
      alert("All fields must have information");
      return;
    }
    if (password != rePass) {
      alert("Passwords must match");
      return;
    }
    authService
      .register(email, password)
      .then((res) => {
        if (res.accessToken) {
          ctx.page.redirect("/products");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  ctx.render(registerTemplate(submitHandler));
};
