function heroesOfCodeAndLogicVII(arr) {
  const heroes = {};
  const amountOfHeroes = Number(arr.shift());

  for (let i = 0; i < amountOfHeroes; i++) {
    let [hero, hp, mp] = arr.shift().split(" ");
    heroes[hero] = {
      hp: Number(hp),
      mp: Number(mp),
    };
  }
  let line = arr.shift();
  while (line !== "End") {
    let [command, hero, mpOrDmg, spellOrAmount] = line.split(" - ");
    switch (command) {
      case "CastSpell":
        if (heroes[hero].mp >= Number(mpOrDmg)) {
          heroes[hero].mp -= Number(mpOrDmg);
          console.log(`${hero} has successfully cast ${spellOrAmount} and now has ${heroes[hero].mp} MP!`);
        } else {
          console.log(`${hero} does not have enough MP to cast ${spellOrAmount}!`);
        }
        break;
      case "TakeDamage":
        heroes[hero].hp -= Number(mpOrDmg);
        if (heroes[hero].hp > 0) {
          console.log(`${hero} was hit for ${mpOrDmg} HP by ${spellOrAmount} and now has ${heroes[hero].hp} HP left!`);
        } else {
          console.log(`${hero} has been killed by ${spellOrAmount}!`);
          delete heroes[hero];
        }
        break;
      case "Recharge":
        let value = 0;
        if (heroes[hero].mp + Number(mpOrDmg) > 200) {
          value = 200 - heroes[hero].mp;
          console.log(`${hero} recharged for ${value} MP!`);
          heroes[hero].mp += value;
        } else {
          heroes[hero].mp += Number(mpOrDmg);
          console.log(`${hero} recharged for ${mpOrDmg} MP!`);
        }
        break;
      case "Heal":
        let healValue = 0;
        if (heroes[hero].hp + Number(mpOrDmg) > 100) {
          healValue = 100 - heroes[hero].hp;
          console.log(`${hero} healed for ${healValue} HP!`);
          heroes[hero].hp += healValue;
        } else {
          heroes[hero].hp += Number(mpOrDmg);
          console.log(`${hero} healed for ${mpOrDmg} HP!`);
        }
        break;
    }
    line = arr.shift();
  }
  for (const key in heroes) {
    console.log(key);
    console.log(`  HP: ${heroes[key].hp}`);
    console.log(`  MP: ${heroes[key].mp}`);
  }
}
heroesOfCodeAndLogicVII(["2", "Solmyr 85 120", "Kyrre 99 50", "Heal - Solmyr - 10", "Recharge - Solmyr - 50", "TakeDamage - Kyrre - 66 - Orc", "CastSpell - Kyrre - 15 - ViewEarth", "End"]);
