import Race from './Race';

export default class Elf extends Race {
  private lifePointsMax: number;
  private static numberInstances = 0;

  constructor(
    name: string,
    dexterity: number,
    maxLifePoints = 99,
  ) {
    super(name, dexterity);
    this.lifePointsMax = maxLifePoints;
    Elf.numberInstances += 1;
  }

  get maxLifePoints(): number {
    return this.lifePointsMax;
  }

  static createdRacesInstances(): number {
    return Elf.numberInstances;
  }
}
