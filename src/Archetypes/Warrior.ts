import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  energyType: EnergyType;
  static instanceWarriorCount = 0;  

  constructor(name: string, special = 0, cost = 0) {
    super(name, special, cost);
    this.energyType = 'stamina';
    Warrior.instanceWarriorCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instanceWarriorCount;
  }
}
