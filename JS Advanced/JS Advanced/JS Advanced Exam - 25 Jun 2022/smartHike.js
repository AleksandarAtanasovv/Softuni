class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }
  addGoal(peak, alt) {
    if (!this.goals.hasOwnProperty(peak)) {
      this.goals[peak] = alt;
      return `You have successfully added a new goal - ${peak}`;
    } else {
      return `${peak} has already been added to your goals`;
    }
  }
  hike(peak, time, difficulty) {
    if (!this.goals.hasOwnProperty(peak)) {
      throw new Error(`${peak} is not in your current goals`);
    } else if (this.resources <= 0) {
      throw new Error(`You don't have enough resources to start the hike`);
    } else {
      const diff = this.resources - time * 10;
      if (diff < 0) {
        return "You don't have enough resources to complete the hike";
      } else {
        this.resources -= time * 10;
        this.listOfHikes.push({
          peak,
          time,
          difficulty,
        });
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
      }
    }
  }
  rest(time) {
    if (this.resources + time * 10 >= 100) {
      this.resources = 100;
      return `Your resources are fully recharged. Time for hiking!`;
    } else {
      this.resources += time * 10;
      return `You have rested for ${time} hours and gained ${time * 10}% resources`;
    }
  }
  showRecord(criteria) {
    if (criteria === "all") {
      const res = [];
      res.push("All hiking records:");
      this.listOfHikes.forEach((hike) => {
        res.push(`${this.username} hiked ${hike.peak} for ${hike.time} hours`);
      });
      return res.join("\n");
    }
    if (this.listOfHikes.length <= 0) {
      return `${this.username} has not done any hiking yet`;
    } else {
      const hikes = this.listOfHikes.filter((x) => x.difficulty === criteria);
      hikes.sort((a, b) => a.time - b.time);
      const bestHike = hikes.shift();
      if (bestHike) {
        return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
      } else {
        return `${this.username} has not done any ${criteria} hiking yet`;
      }
    }
  }
}
const user = new SmartHike("Vili");
user.addGoal("Musala", 2925);
user.hike("Musala", 8, "hard");
console.log(user.showRecord("easy"));
user.addGoal("Vihren", 2914);
user.hike("Vihren", 4, "hard");
console.log(user.showRecord("hard"));
user.addGoal("Rui", 1706);
user.hike("Rui", 3, "easy");
console.log(user.showRecord("all"));
