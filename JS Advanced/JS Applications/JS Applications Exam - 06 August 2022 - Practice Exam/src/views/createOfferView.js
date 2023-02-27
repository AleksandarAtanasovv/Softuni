import { html } from "../../node_modules/lit-html/lit-html.js";
import * as jobOfferService from "../services/jobOfferService.js";

const createOfferTemplate = (submitHandler) => html`
  <section id="create">
    <div class="form">
      <h2>Create Offer</h2>
      <form class="create-form" @submit=${submitHandler}>
        <input type="text" name="title" id="job-title" placeholder="Title" />
        <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" />
        <input type="text" name="category" id="job-category" placeholder="Category" />
        <textarea
          id="job-description"
          name="description"
          placeholder="Description"
          rows="4"
          cols="50"
        ></textarea>
        <textarea
          id="job-requirements"
          name="requirements"
          placeholder="Requirements"
          rows="4"
          cols="50"
        ></textarea>
        <input type="text" name="salary" id="job-salary" placeholder="Salary" />

        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export const createOfferView = (ctx) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const { category, description, imageUrl, requirements, salary, title } = Object.fromEntries(
      new FormData(e.currentTarget)
    );
    if (category && description && imageUrl && requirements && salary && title) {
      jobOfferService
        .create(
          {
            title,
            imageUrl,
            category,
            description,
            requirements,
            salary,
          },
          ctx.user.accessToken
        )
        .then(() => {
          ctx.page.redirect("/dashboard");
        });
    }
  };

  if (ctx.user) {
    ctx.render(createOfferTemplate(submitHandler));
  } else {
    ctx.page.redirect("/");
  }
};
