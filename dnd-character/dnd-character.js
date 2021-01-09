export const abilityModifier = (num) => {
  if (num < 3) throw "Ability scores must be at least 3";
  if (num > 18) throw "Ability scores can be at most 18";

  return Math.floor((num - 10) / 2);
};

export class Character {
  static rollAbility() {
    let diceThrows = [];
    for (let i = 1; i <= 4; i++) {
      diceThrows.push(Math.floor(Math.random() * 6) + 1);
    }
    diceThrows.sort((a, b) => a - b).shift();

    return diceThrows.reduce((a, b) => a + b);
  }

  strength = Character.rollAbility();
  dexterity = Character.rollAbility();
  constitution = Character.rollAbility();
  intelligence = Character.rollAbility();
  wisdom = Character.rollAbility();
  charisma = Character.rollAbility();

  get strength() {
    return this.strength;
  }

  get dexterity() {
    return this.dexterity;
  }

  get constitution() {
    return this.constitution;
  }

  get intelligence() {
    return this.intelligence;
  }

  get wisdom() {
    return this.wisdom;
  }

  get charisma() {
    return this.charisma;
  }

  get hitpoints() {
    return 10 + abilityModifier(this.constitution);
  }
}
