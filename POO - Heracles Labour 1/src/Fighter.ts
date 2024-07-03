const MAX_LIFE: number = 100;

function randomInt(max: number): number {
  return Math.floor(Math.random() * max) + 1;
}

export class Fighter {
  public name: string;
  public strength: number;
  private dexterity: number;
  public life: number = MAX_LIFE;

  constructor(name: string, strength: number, dexterity: number) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
  }

  fight(Fighter: { strength: number }): number {
    const damages: number =
      randomInt(Fighter.strength) - this.dexterity > 0
        ? Fighter.strength - this.dexterity
        : 1;
    return this.life - damages >= 0 ? (this.life = this.life - damages) : 0;
  }

  isAlive(): boolean {
    return this.life > 0 ? true : false;
  }
}
