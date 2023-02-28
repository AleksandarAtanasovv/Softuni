import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as productsService from "../services/productsService.js";

const createTemplate = (submitHandler) => html`
  <section id="create">
    <div class="form">
      <h2>Add Product</h2>
      <form class="create-form" @submit=${submitHandler}>
        <input type="text" name="name" id="name" placeholder="Product Name" />
        <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" />
        <input type="text" name="category" id="product-category" placeholder="Category" />
        <textarea
          id="product-description"
          name="description"
          placeholder="Description"
          rows="5"
          cols="50"
        ></textarea>

        <input type="text" name="price" id="product-price" placeholder="Price" />

        <button type="submit">Add</button>
      </form>
    </div>
  </section>
`;

export const createView = (ctx) => {
  if (ctx.user) {
    const submitHandler = (e) => {
      e.preventDefault();
      const { category, description, imageUrl, name, price } = Object.fromEntries(
        new FormData(e.currentTarget)
      );
      if (!category || !description || !imageUrl || !name || !price) {
        alert("All fields must have information");
        return;
      }
      productsService.create(
        { category, description, imageUrl, name, price },
        ctx.user.accessToken
      );
      ctx.page.redirect("/products");
    };
    ctx.render(createTemplate(submitHandler));
  } else {
    ctx.page.redirect("/products");
  }
};
