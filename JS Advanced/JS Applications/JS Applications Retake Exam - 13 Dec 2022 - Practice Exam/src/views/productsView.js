import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as productsService from "../services/productsService.js";

const productTemplate = (product) => html`
  <div class="product">
    <img src="${product.imageUrl}" alt="example1" />
    <p class="title">${product.name}</p>
    <p>
      <strong>Price:</strong>
      <span class="price">${product.price}</span>$
    </p>
    <a class="details-btn" href="/details/${product._id}"> Details </a>
  </div>
`;
const productsTemplate = (products) => html`
  <h2>Products</h2>
  <section id="dashboard">
    ${products.length <= 0
      ? html`<h2>No products yet.</h2>`
      : products.map((p) => productTemplate(p))}
  </section>
`;

export const productsView = async (ctx) => {
  const products = await productsService.getAll();
  ctx.render(productsTemplate(products));
};
