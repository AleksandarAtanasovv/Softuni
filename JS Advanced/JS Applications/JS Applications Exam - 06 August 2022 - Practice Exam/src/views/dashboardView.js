import { html } from "../../node_modules/lit-html/lit-html.js";
import * as jobOfferService from "../services/jobOfferService.js";

const offerTemplate = (offer) => html`
  <div class="offer">
    <img src="${offer.imageUrl}" alt="example1" />
    <p><strong>Title: </strong><span class="title">${offer.title}</span></p>
    <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
    <a class="details-btn" href="/details/${offer._id}">Details</a>
  </div>
`;

const noOffersTemplate = html`<h2>No offers yet.</h2> `;

const dashboardTemplate = (offers) => html`
  <section id="dashboard">
    <h2>Job Offers</h2>

    ${offers.length == 0 ? noOffersTemplate : offers.map((o) => offerTemplate(o))}
  </section>
`;

export const dashboardView = async (ctx) => {
  const offers = await jobOfferService.getAll();
  ctx.render(dashboardTemplate(offers));
};
