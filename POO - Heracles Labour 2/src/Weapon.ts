const damage: number = 10;

export class Weapon {
  public name: string;
  public damage: number = damage;

  constructor(name: string) {
    this.name = name;
  }
}
