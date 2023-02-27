import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as jobOfferService from "../services/jobOfferService.js";

const detailsTemplate = (offer, user, totalApplications, hasUserApplied) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src="/${offer.imageUrl}" alt="example1" />
      <p id="details-title">${offer.title}</p>
      <p id="details-category">Category: <span id="categories">${offer.category}</span></p>
      <p id="details-salary">Salary: <span id="salary-number">${offer.salary}</span></p>
      <div id="info-wrapper">
        <div id="details-description">
          <h4>Description</h4>
          <span>${offer.description}</span>
        </div>
        <div id="details-requirements">
          <h4>Requirements</h4>
          <span>${offer.requirements}</span>
        </div>
      </div>
      <p>Applications: <strong id="applications">${totalApplications}</strong></p>

      <!--Edit and Delete are only for creator-->
      ${
        user._id == offer._ownerId
          ? html`
              <div id="action-buttons">
                <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
                <a href="/delete/${offer._id}" id="delete-btn">Delete</a>
              </div>
            `
          : nothing
      }

        <!--Bonus - Only for logged-in users ( not authors )-->
        ${
          user._id != offer._ownerId && hasUserApplied != 1
            ? html`<a href="/apply/${offer._id}" id="apply-btn">Apply</a>`
            : nothing
        }
      </div>
    </div>
  </section>
`;

export const detailsView = async (ctx) => {
  const offer = await jobOfferService.getOne(ctx.params.id);
  const totalApplications = await jobOfferService.totalApplications(ctx.params.id);
  const hasUserApplied = await jobOfferService.applicationsForUser(ctx.params.id, ctx.user._id);
  ctx.render(detailsTemplate(offer, ctx.user, totalApplications, hasUserApplied));
};
