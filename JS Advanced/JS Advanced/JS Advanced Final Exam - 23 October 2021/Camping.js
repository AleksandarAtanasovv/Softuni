class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
    this.listOfParticipants = [];
  }
  registerParticipant(name, condition, money) {
    if (!this.priceForTheCamp[condition]) {
      throw new Error("Unsuccessful registration at the camp.");
    }
    const participant = this.listOfParticipants.find((p) => p.name === name);
    if (participant) {
      return `The ${name} is already registered at the camp.`;
    }
    if (this.priceForTheCamp[condition] > Number(money)) {
      return `The money is not enough to pay the stay at the camp.`;
    }
    this.listOfParticipants.push({
      name,
      condition,
      power: 100,
      wins: 0,
    });
    return `The ${name} was successfully registered.`;
  }
  unregisterParticipant(name) {
    const participant = this.listOfParticipants.find((p) => p.name === name);
    if (!participant) {
      throw new Error(`The ${name} is not registered in the camp.`);
    }
    const index = this.listOfParticipants.indexOf(participant);
    this.listOfParticipants.splice(index, 1);
    return `The ${name} removed successfully.`;
  }
  timeToPlay(typeOfGame, participant1, participant2) {
    const participant1Found = this.listOfParticipants.find((p) => p.name === participant1);
    const participant2Found = this.listOfParticipants.find((p) => p.name === participant2);
    if (participant1 && participant2) {
      if (!participant1Found || !participant2Found) {
        throw new Error(`Invalid entered name/s.`);
      }
      if (participant2Found.condition !== participant1Found.condition) {
        throw new Error(`Choose players with equal condition.`);
      }
      if (participant2Found.power > participant1Found.power) {
        const index = this.listOfParticipants.indexOf(participant2Found);
        this.listOfParticipants[index].wins += 1;
        return `The ${participant2Found.name} is winner in the game ${typeOfGame}.`;
      } else if (participant2Found.power < participant1Found.power) {
        const index = this.listOfParticipants.indexOf(participant1Found);
        this.listOfParticipants[index].wins += 1;
        return `The ${participant1Found.name} is winner in the game ${typeOfGame}.`;
      } else {
        return `There is no winner.`;
      }
    } else {
      if (!participant1Found) {
        throw new Error(`Invalid entered name/s.`);
      }
      const index = this.listOfParticipants.indexOf(participant1Found);
      this.listOfParticipants[index].power += 20;
      return `The ${participant1Found.name} successfully completed the game ${typeOfGame}.`;
    }
  }
  toString() {
    const resArr = [];
    this.listOfParticipants.sort((a, b) => b.wins - a.wins);
    resArr.push(
      `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`
    );
    this.listOfParticipants.forEach((participant) => {
      resArr.push(
        `${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`
      );
    });
    return resArr.join("\n");
  }
}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));
