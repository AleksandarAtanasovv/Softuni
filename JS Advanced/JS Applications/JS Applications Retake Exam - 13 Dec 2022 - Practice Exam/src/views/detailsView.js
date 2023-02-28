import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as productsService from "../services/productsService.js";

const detailsTemplate = (product, user, buys, buysForUser) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src="${product.imageUrl}" alt="example1" />
      <p id="details-title">${product.name}</p>
      <p id="details-category">Category: <span id="categories">${product.category}</span></p>
      <p id="details-price">Price: <span id="price-number">${product.price}</span>$</p>
      <div id="info-wrapper">
        <div id="details-description">
          <h4>Bought: <span id="buys">${buys}</span> times.</h4>
          <span>${product.description}</span>
        </div>
      </div>

      ${
        user && user._id == product._ownerId
          ? html` <div id="action-buttons">
              <a href="/edit/${product._id}" id="edit-btn">Edit</a>
              <a href="/delete/${product._id}" id="delete-btn">Delete</a>
            </div>`
          : nothing
      }

        ${
          user && user._id != product._ownerId && buysForUser <= 0
            ? html`<a href="/buy/${product._id}" id="buy-btn">Buy</a>`
            : nothing
        }
      </div>
    </div>
  </section>
`;

export const detailsView = async (ctx) => {
  const product = await productsService.getOne(ctx.params.id);
  const likes = await productsService.getLikes(ctx.params.id);
  const buysForUser = await productsService.getBuysForUser(ctx.user._id, ctx.params.id);
  ctx.render(detailsTemplate(product, ctx.user, likes, buysForUser));
};
