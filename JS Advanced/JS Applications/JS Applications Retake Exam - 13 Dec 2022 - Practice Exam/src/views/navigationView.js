import { html, nothing } from "../../node_modules/lit-html/lit-html.js";

const loggedInUserTemplateLinks = html`
  <div class="user">
    <a href="/create">Add Product</a>
    <a href="/logout">Logout</a>
  </div>
`;
const guestUserTemplateLinks = html`
  <div class="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  </div>
`;

const navigationTemplate = (user) => html`
  <!-- Navigation -->
  <a id="logo" href="/"><img id="logo-img" src="/./images/logo.png" alt="" /></a>

  <nav>
    <div>
      <a href="/products">Products</a>
    </div>
    ${user ? loggedInUserTemplateLinks : guestUserTemplateLinks}
  </nav>
`;
export const navigationView = (ctx) => {
  return navigationTemplate(ctx.user);
};
