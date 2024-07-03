const MAX_LIFE: number = 100;

function randomInt(max: number): number {
  return Math.floor(Math.random() * max) + 1;
}

export class Fighter {
  public name: string;
  private strength: number;
  private dexterity: number;
  public life: number = MAX_LIFE;

  constructor(name: string, strength: number, dexterity: number) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
  }

  fight(defender: Fighter): number {
    let damages: number = randomInt(this.strength) - defender.dexterity;
    damages = damages > 0 ? damages : 1;

    return defender.life - damages >= 0
      ? (defender.life = defender.life - damages)
      : 0;
  }

  isAlive(): boolean {
    return this.life > 0 ? true : false;
  }
}
