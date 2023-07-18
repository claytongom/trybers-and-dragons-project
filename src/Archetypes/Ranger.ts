import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  energyType: EnergyType;
  static instanceRangerCount = 0;  

  constructor(name: string, special = 0, cost = 0) {
    super(name, special, cost);
    this.energyType = 'stamina';
    Ranger.instanceRangerCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instanceRangerCount;
  }
}
