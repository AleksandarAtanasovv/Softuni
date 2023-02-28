import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as productsService from "../services/productsService.js";

const editTemplate = (submitHandler, product) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Product</h2>
      <form class="edit-form" @submit=${submitHandler}>
        <input type="text" name="name" value=${product.name} id="name" placeholder="Product Name" />
        <input
          type="text"
          name="imageUrl"
          value=${product.imageUrl}
          id="product-image"
          placeholder="Product Image"
        />
        <input
          type="text"
          name="category"
          value=${product.category}
          id="product-category"
          placeholder="Category"
        />
        <textarea
          id="product-description"
          name="description"
          placeholder="Description"
          rows="5"
          cols="50"
        ></textarea>

        <input
          type="text"
          name="price"
          value=${product.price}
          id="product-price"
          placeholder="Price"
        />
        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export const editView = async (ctx) => {
  if (ctx.user) {
    const submitHandler = async (e) => {
      e.preventDefault();
      const { category, description, imageUrl, name, price } = Object.fromEntries(
        new FormData(e.currentTarget)
      );
      if (!category || !description || !imageUrl || !name || !price) {
        alert("All fields must have information");
        return;
      }
      await productsService.edit(
        { category, description, imageUrl, name, price },
        ctx.user.accessToken,
        ctx.params.id
      );
      ctx.page.redirect("/products");
    };
    const product = await productsService.getOne(ctx.params.id);
    ctx.render(editTemplate(submitHandler, product));
    document.getElementById("product-description").textContent = product.description;
  } else {
    ctx.page.redirect("/products");
  }
};
