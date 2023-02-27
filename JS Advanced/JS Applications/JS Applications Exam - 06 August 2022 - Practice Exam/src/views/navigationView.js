import { html } from "../../node_modules/lit-html/lit-html.js";

const loggedUserLinks = html`
  <!-- Logged-in users -->
  <div class="user">
    <a href="/create-offer">Create Offer</a>
    <a href="/logout">Logout</a>
  </div>
`;

const guestUserLinks = html`
  <div class="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  </div>
`;

const navigationTemplate = (user) => html`
  <a id="logo" href="/"><img id="logo-img" src="/./images/logo.jpg" alt="" /></a>
  <nav>
    <div>
      <a href="/dashboard">Dashboard</a>
    </div>
    ${user ? loggedUserLinks : guestUserLinks}
  </nav>
`;
export const navigationView = (ctx) => {
  return navigationTemplate(ctx.user);
};
