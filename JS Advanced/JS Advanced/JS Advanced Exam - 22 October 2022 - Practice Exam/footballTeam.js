class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }
  newAdditions(players) {
    players.forEach((player) => {
      let [name, age, playerValue] = player.split("/");
      age = Number(age);
      playerValue = Number(playerValue);
      const currentPlayer = this.invitedPlayers.find((x) => x.name === name);
      if (!currentPlayer) {
        this.invitedPlayers.push({ name, age, playerValue });
      } else {
        if (currentPlayer.playerValue < playerValue) {
          currentPlayer.playerValue = playerValue;
        }
      }
    });
    const res = [];
    this.invitedPlayers.forEach((el) => {
      res.push(el.name);
    });
    return `You successfully invite ${res.join(", ")}.`;
  }
  signContract(selectedPlayer) {
    let [name, offer] = selectedPlayer.split("/");
    offer = Number(offer);
    const player = this.invitedPlayers.find((x) => x.name === name);
    if (player) {
      if (player.playerValue > offer) {
        throw new Error(
          `The manager's offer is not enough to sign a contract with ${name}, ${Math.abs(
            player.playerValue - offer
          )} million more are needed to sign the contract!`
        );
      } else if (player.playerValue <= offer) {
        player.playerValue = "Bought";
      }
    } else {
      throw new Error(`${name} is not invited to the selection list!`);
    }
    return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
  }
  ageLimit(name, age) {
    const player = this.invitedPlayers.find((x) => x.name === name);
    if (!player) {
      throw new Error(`${name} is not invited to the selection list!`);
    } else {
      if (player.age < Number(age)) {
        let diff = Math.abs(player.age - age);
        if (diff < 5) {
          return `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`;
        } else {
          return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
        }
      } else if (player.age >= Number(age)) {
        return `${name} is above age limit!`;
      }
    }
  }
  transferWindowResult() {
    const res = [];
    res.push("Players list:");
    this.invitedPlayers
      .sort((a, b) => a.name - b.name)
      .map((x) => res.push(`Player ${x.name}-${x.playerValue}`));
    return res.join("\n");
  }
}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
