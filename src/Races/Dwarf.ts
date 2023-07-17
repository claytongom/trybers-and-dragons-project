import Race from './Race';

export default class Dwarf extends Race {
  private lifePointsMax: number;
  private static numberInstances = 0;

  constructor(
    name: string,
    dexterity: number,
    maxLifePoints = 80,
  ) {
    super(name, dexterity);
    this.lifePointsMax = maxLifePoints;
    Dwarf.numberInstances += 1;
  }

  get maxLifePoints(): number {
    return this.lifePointsMax;
  }

  static createdRacesInstances(): number {
    return Dwarf.numberInstances;
  }
}