const MAX_LIFE: number = 100;

function randomInt(max: number): number {
  return Math.floor(Math.random() * max) + 1;
}

export class Fighter {
  public name: string;
  private strength: number;
  private dexterity: number;
  public life: number = MAX_LIFE;
  private weapon?: { name: string; damage: number } | null;
  private shield?: { name: string; protection: number } | null;

  constructor(
    name: string,
    strength: number,
    dexterity: number,
    weapon?: { name: string; damage: number } | null,
    shield?: { name: string; protection: number } | null
  ) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.weapon = weapon || null;
    this.shield = shield || null;
  }

  getDamage(): number {
    return this.weapon ? this.strength + this.weapon?.damage : this.strength;
  }

  getDefense(): number {
    return this.shield
      ? this.dexterity + this.shield?.protection
      : this.dexterity;
  }

  fight(defender: Fighter): number {
    let damages: number = randomInt(this.getDamage()) - defender.getDefense();
    damages = damages > 0 ? damages : 1;

    return defender.life - damages >= 0
      ? (defender.life = defender.life - damages)
      : 0;
  }

  isAlive(): boolean {
    return this.life > 0 ? true : false;
  }
}
