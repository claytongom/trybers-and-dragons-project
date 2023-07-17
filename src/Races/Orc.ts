import Race from './Race';

export default class Orc extends Race {
  private lifePointsMax: number;
  private static numberInstances = 0;

  constructor(
    name: string,
    dexterity: number,
    maxLifePoints = 74,
  ) {
    super(name, dexterity);
    this.lifePointsMax = maxLifePoints;
    Orc.numberInstances += 1;
  }

  get maxLifePoints(): number {
    return this.lifePointsMax;
  }

  static createdRacesInstances(): number {
    return Orc.numberInstances;
  }
}