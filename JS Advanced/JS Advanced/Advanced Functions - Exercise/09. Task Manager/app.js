function solve() {
  const form = document.querySelector("form");
  const [addTaskSection, openSection, inProgressSection, completeSection] = Array.from(
    document.querySelectorAll("section")
  );
  const task = document.getElementById("task");
  const description = document.getElementById("description");
  const date = document.getElementById("date");
  form.addEventListener("submit", addTask);
  function addTask(e) {
    e.preventDefault();
    if (task.value && description.value && date.value) {
      const article = document.createElement("article");
      const h3 = document.createElement("h3");
      const descriptionP = document.createElement("p");
      const dateP = document.createElement("p");
      const div = document.createElement("div");
      const startBtn = document.createElement("button");
      const deleteBtn = document.createElement("button");
      div.classList.add("flex");
      startBtn.classList.add("green");
      deleteBtn.classList.add("red");
      startBtn.textContent = "Start";
      deleteBtn.textContent = "Delete";
      h3.textContent = task.value;
      descriptionP.textContent = `Description: ${description.value}`;
      dateP.textContent = `Due Date: ${date.value}`;
      div.appendChild(startBtn);
      startBtn.addEventListener("click", startTask);
      deleteBtn.addEventListener("click", deleteTask);
      div.appendChild(deleteBtn);
      article.appendChild(h3);
      article.appendChild(descriptionP);
      article.appendChild(dateP);
      article.appendChild(div);
      openSection.lastElementChild.appendChild(article);
      task.value = "";
      description.value = "";
      date.value = "";
      function deleteTask() {
        article.remove();
      }
      function startTask() {
        startBtn.remove();
        const finishBtn = document.createElement("button");
        finishBtn.classList.add("orange");
        finishBtn.textContent = "Finish";
        finishBtn.addEventListener("click", finishTask);
        div.appendChild(finishBtn);
        inProgressSection.lastElementChild.appendChild(article);
      }
      function finishTask() {
        div.remove();
        completeSection.lastElementChild.appendChild(article);
      }
    } else {
      return;
    }
  }
}
