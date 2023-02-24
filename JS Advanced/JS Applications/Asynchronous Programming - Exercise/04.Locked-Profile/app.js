function lockedProfile() {
  fetch("http://localhost:3030/jsonstore/advanced/profiles")
    .then((res) => res.json())
    .then((data) => displayProfiles(data))
    .catch((err) => console.log(err));

  function displayProfiles(data) {
    document.getElementById("main").innerHTML = "";
    Object.entries(data).forEach(([id, user]) => {
      const div = document.createElement("div");
      div.classList.add("profile");
      div.innerHTML = `
      <img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user${id}Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user${id}Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user1Username" value="${user.username}" disabled readonly />
				<div id="user${id}HiddenFields">
					<hr>
					<label>Email:</label>
					<input type="email" name="user${id}Email" value="${user.email}" disabled readonly />
					<label>Age:</label>
					<input type="email" name="user${id}Age" value="${user.age}" disabled readonly />
				</div>
				
				<button>Show more</button>
      `;
      div.querySelector(`div`).style.display = "none";
      document.getElementById("main").appendChild(div);
    });

    const profiles = document.querySelectorAll(".profile");
    profiles.forEach((profile) => {
      const button = profile.querySelector("button");
      button.addEventListener("click", (e) => {
        const locked = profile.querySelector('input[value="lock"]').checked;
        if (locked === false && e.target.textContent == "Show more") {
          e.target.textContent = "Hide it";
          e.target.parentElement.querySelector("div").style.display = "block";
        } else {
          e.target.parentElement.querySelector("div").style.display = "none";
          e.target.textContent = "Show more";
        }
      });
    });
  }
}
