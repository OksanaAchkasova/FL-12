class Fighter {
  constructor (fighter) {
    this._name = fighter.name;
    this._damage = fighter.damage;
    this._hp = fighter.hp;
    this._totalHP = fighter.hp;
    this._strength = fighter.strength;
    this._agility = fighter.agility;
    this._win = 0;
    this._loss = 0;
  }

  getName() {
    return this._name;
  }

  getDamage() {
    return this._damage;
  }

  getStrength() {
    return this._strength;
  }

  getAgility() {
    return this._agility;
  }

  getHealth() {
    return this._hp;
  }

  attack(defender) {
    const PERCENT = 100;
    if (Math.random() > (defender.getAgility() + defender.getStrength())/PERCENT) {
      console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
      defender.dealDamage(this.getDamage());      
    } else {
      console.log(`${this.getName()} attack missed`);
    }  
  }

  logCombatHistory() {
    console.log(`Name: ${this.getName()}, Wins: ${this._win}, Losses: ${this._loss}`);
  }

  heal(health) {
    if (this._hp + health > this._totalHP) {
      this._hp = this._totalHP;
    } else {
      this._hp += health;
    }
  }

  dealDamage(damage) {
    if (this._hp - damage <= 0) {
      this._hp = 0;
    } else {
      this._hp = this._hp - damage;
    }
  }

  addWin() {
    return this._win++;
  }

  addLoss() {
    return this._loss++;
  }  
}

const myFighter = new Fighter({
  name: 'Maximus', 
  damage: 20, 
  hp: 100, 
  strength: 20, 
  agility: 15}); 

const myFighter2 = new Fighter({
  name: 'Vasya', 
  damage: 25, 
  hp: 90, 
  strength: 25, 
  agility: 20}); 

function battle (fighter1, fighter2) {
  if (!fighter1.getHealth()) {
    console.log(`${fighter1.getName()} is dead and can't fight`);
  } else if (!fighter2.getHealth()) {
    console.log(`${fighter2.getName()} is dead and can't fight`);
  } 
  while (fighter1.getHealth() && fighter2.getHealth() ) {
    fighter1.attack(fighter2);
    if(fighter2.getHealth()) {
      fighter2.attack(fighter1);
      if (!fighter1.getHealth()) {
        console.log(`${fighter2.getName()} has won`);
        fighter2.addWin();
        fighter1.addLoss();
      } 
    } else {
      console.log(`${fighter1.getName()} has won`);
      fighter1.addWin();
      fighter2.addLoss();
    }
  }
}
