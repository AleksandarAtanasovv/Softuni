import { html, nothing } from "../../node_modules/lit-html/lit-html.js";

const guestLinks = html`
  <div id="guest">
    <a id="login" href="/login">Login</a>
    <a id="register" href="/register">Register</a>
  </div>
`;

const navbarTemplate = (user) => html`
  <h1>Biggest Catch</h1>
  <nav>
    <a id="home" class="active" href="/">Home</a>

    ${!user
      ? guestLinks
      : html`<div id="user">
          <a id="logout" href="/logout">Logout</a>
        </div>`}
    <p class="email">Welcome, <span>${user ? user.email : "guest"}</span></p>
  </nav>
`;
export const navbarView = (ctx) => {
  return navbarTemplate(ctx.user);
};
