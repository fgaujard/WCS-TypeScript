const protection: number = 10;

export class Shield {
  public name: string;
  public protection: number = protection;

  constructor(name: string) {
    this.name = name;
  }
}
