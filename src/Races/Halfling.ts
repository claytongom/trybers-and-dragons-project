import Race from './Race';

export default class Halfling extends Race {
  private lifePointsMax: number;
  private static numberInstances = 0;

  constructor(
    name: string,
    dexterity: number,
    maxLifePoints = 60,
  ) {
    super(name, dexterity);
    this.lifePointsMax = maxLifePoints;
    Halfling.numberInstances += 1;
  }

  get maxLifePoints(): number {
    return this.lifePointsMax;
  }

  static createdRacesInstances(): number {
    return Halfling.numberInstances;
  }
}