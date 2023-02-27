import { html } from "../../node_modules/lit-html/lit-html.js";
import * as jobOfferService from "../services/jobOfferService.js";

const editTemplate = (offer, submitHandler) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Offer</h2>
      <form class="edit-form" @submit=${submitHandler}>
        <input type="text" name="title" value=${offer.title} id="job-title" placeholder="Title" />
        <input
          type="text"
          name="imageUrl"
          value=${offer.imageUrl}
          id="job-logo"
          placeholder="Company logo url"
        />
        <input
          type="text"
          name="category"
          value=${offer.category}
          id="job-category"
          placeholder="Category"
        />
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
        <input
          type="text"
          name="salary"
          value=${offer.salary}
          id="job-salary"
          placeholder="Salary"
        />
        <script></script>
        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export const editView = async (ctx) => {
  const offer = await jobOfferService.getOne(ctx.params.id);
  if (offer._ownerId == ctx.user._id) {
    const submitHandler = (e) => {
      e.preventDefault();
      const { category, description, imageUrl, requirements, salary, title } = Object.fromEntries(
        new FormData(e.currentTarget)
      );
      if (category && description && imageUrl && requirements && salary && title) {
        jobOfferService
          .edit(
            {
              title,
              imageUrl,
              category,
              description,
              requirements,
              salary,
            },
            ctx.user.accessToken,
            ctx.params.id
          )
          .then(() => {
            ctx.page.redirect("/dashboard");
          });
      }
    };
    ctx.render(editTemplate(offer, submitHandler));
    document.getElementById("job-description").textContent = offer.description;
    document.getElementById("job-requirements").textContent = offer.requirements;
  } else {
    ctx.page.redirect("/dashboard");
  }
};
