window.addEventListener("load", solve);

function solve() {
  const fieldValues = [];
  const publishBtn = document.getElementById("form-btn");
  publishBtn.addEventListener("click", getInfo);
  const [firstName, lastName, age, title] = Array.from(document.querySelectorAll("form input"));
  const genre = document.getElementById("genre");
  const preview = document.getElementById("preview-list");
  const story = document.getElementById("story");
  function getInfo() {
    const li = document.createElement("li");
    if (firstName.value && lastName.value && age.value && title.value && story.value) {
      li.classList.add("story-info");
      const article = document.createElement("article");
      const h4 = document.createElement("h4");
      const pAge = document.createElement("p");
      const pTitle = document.createElement("p");
      const pGenre = document.createElement("p");
      const pStory = document.createElement("p");
      const saveStoryBtn = document.createElement("button");
      saveStoryBtn.classList.add("save-btn");
      const editStoryBtn = document.createElement("button");
      editStoryBtn.classList.add("edit-btn");
      const deleteStoryBtn = document.createElement("button");
      deleteStoryBtn.classList.add("delete-btn");
      h4.textContent = `Name: ${firstName.value} ${lastName.value}`;
      pAge.textContent = `Age: ${age.value}`;
      pTitle.textContent = `Title: ${title.value}`;
      pGenre.textContent = `Genre: ${genre.value}`;
      pStory.textContent = `${story.value}`;
      saveStoryBtn.textContent = "Save Story";
      editStoryBtn.textContent = "Edit Story";
      deleteStoryBtn.textContent = "Delete Story";
      article.appendChild(h4);
      article.appendChild(pAge);
      article.appendChild(pTitle);
      article.appendChild(pGenre);
      article.appendChild(pStory);
      li.appendChild(saveStoryBtn);
      li.appendChild(editStoryBtn);
      li.appendChild(deleteStoryBtn);
      li.appendChild(article);
      preview.appendChild(li);
      fieldValues.push(
        firstName.value,
        lastName.value,
        age.value,
        title.value,
        genre.value,
        story.value
      );
      firstName.value = "";
      lastName.value = "";
      age.value = "";
      title.value = "";
      story.value = "";
      publishBtn.disabled = true;
    } else {
      return;
    }
    const [saveBtn, editBtn, deleteBtn] = Array.from(preview.querySelectorAll("button"));
    editBtn.addEventListener("click", editStory);

    function editStory() {
      saveBtn.disabled = true;
      editBtn.disabled = true;
      deleteBtn.disabled = true;
      publishBtn.disabled = false;
      const [fNameVal, lNameVal, ageVal, titleVal, genreVal, storyVal] = fieldValues;
      firstName.value = fNameVal;
      lastName.value = lNameVal;
      age.value = ageVal;
      title.value = titleVal;
      story.value = storyVal;
      preview.removeChild(li);
    }
    saveBtn.addEventListener("click", saveStory);
    function saveStory() {
      document.getElementById("main").innerHTML = "";
      const h1 = document.createElement("h1");
      h1.textContent = "Your scary story is saved!";
      document.getElementById("main").appendChild(h1);
    }
    deleteBtn.addEventListener("click", removeStory);
    function removeStory() {
      li.remove();
      publishBtn.disabled = false;
    }
  }
}
