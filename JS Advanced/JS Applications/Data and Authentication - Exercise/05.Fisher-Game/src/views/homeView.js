import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as catchesService from "../services/catchesService.js";
// angler: "Paulo Admorim";
// bait: "trolled pink";
// captureTime: 80;
// location: "Vitoria, Brazil";
// species: "Atlantic Blue Marlin";
// weight: 636;
// _createdOn: 1614760714812;
// _id: "07f260f4-466c-4607-9a33-f7273b24f1b4";
// _ownerId: "35c62d76-8152-4626-8712-eeb96381bea8";

const catchTemplate = (caught, user, updateCatch, deleteCatch) => html`
  <div class="catch">
    <label>Angler</label>
    <input type="text" class="angler" value="${caught.angler}" />
    <label>Weight</label>
    <input type="text" class="weight" value="${caught.weight}" />
    <label>Species</label>
    <input type="text" class="species" value="${caught.species}" />
    <label>Location</label>
    <input type="text" class="location" value="${caught.location}" />
    <label>Bait</label>
    <input type="text" class="bait" value="${caught.bait}" />
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="${caught.captureTime}" />
    ${user && user._id == caught._ownerId
      ? html`<button class="update" @click=${updateCatch} data-id="${caught._id}">Update</button>
          <button class="delete" @click=${deleteCatch} data-id="${caught._id}">Delete</button>`
      : html`<button class="update" disabled data-id="${caught._id}">Update</button>
          <button class="delete" disabled data-id="${caught._id}">Delete</button>`}
  </div>
`;

const homeTemplate = (
  user,
  loadAllCatches,
  catches,
  updateCatch,
  deleteCatch,
  submitHandler
) => html`
  <fieldset id="main">
    <legend>Catches</legend>

    <div id="catches">
      ${catches ? catches.map((c) => catchTemplate(c, user, updateCatch, deleteCatch)) : nothing}
    </div>
  </fieldset>
  <aside>
    <button class="load" @click=${loadAllCatches}>Load</button>
    <form id="addForm" @submit=${submitHandler}>
      <fieldset>
        <legend>Add Catch</legend>
        <label>Angler</label>
        <input type="text" name="angler" class="angler" />
        <label>Weight</label>
        <input type="number" name="weight" class="weight" />
        <label>Species</label>
        <input type="text" name="species" class="species" />
        <label>Location</label>
        <input type="text" name="location" class="location" />
        <label>Bait</label>
        <input type="text" name="bait" class="bait" />
        <label>Capture Time</label>
        <input type="number" name="captureTime" class="captureTime" />
        ${user
          ? html`<button class="add">Add</button>`
          : html`<button disabled class="add">Add</button>`}
      </fieldset>
    </form>
  </aside>
`;

export const homeView = (ctx) => {
  function submitHandler(e) {
    e.preventDefault();
    const { angler, bait, captureTime, location, species, weight } = Object.fromEntries(
      new FormData(e.currentTarget)
    );
    if (angler && bait && captureTime && location && species && weight) {
      catchesService
        .createOne({ angler, bait, captureTime, location, species, weight }, ctx.user.accessToken)
        .then((data) => {
          ctx.page.redirect("/");
          return data;
        })
        .catch((err) => {
          return alert(err);
        });
    } else {
      return alert("All fields must be filled");
    }
  }
  async function loadAllCatches() {
    const data = await catchesService.getAllCatches();
    function updateCatch(e) {
      const parent = e.target.parentElement;
      const angler = parent.querySelector(".angler").value;
      const weight = parent.querySelector(".weight").value;
      const species = parent.querySelector(".species").value;
      const location = parent.querySelector(".location").value;
      const bait = parent.querySelector(".bait").value;
      const captureTime = parent.querySelector(".captureTime").value;
      if (angler && weight && species && location && bait && captureTime) {
        try {
          catchesService
            .updateOne(
              { angler, weight, species, location, bait, captureTime },
              e.target.dataset.id,
              ctx.user.accessToken
            )
            .then(() => {
              ctx.page.redirect("/");
            });
        } catch (err) {
          return alert(err.message);
        }
      } else {
        return alert("All fields must be filled");
      }
    }
    function deleteCatch(e) {
      try {
        catchesService.deleteOne(e.target.dataset.id, ctx.user.accessToken).then(() => {
          ctx.page.redirect("/");
        });
      } catch (err) {
        return alert(err);
      }
    }
    ctx.render(
      homeTemplate(ctx.user, loadAllCatches, data, updateCatch, deleteCatch, submitHandler)
    );
  }
  ctx.render(homeTemplate(ctx.user, loadAllCatches, null, null, null, submitHandler));
};
