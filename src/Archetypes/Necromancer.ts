import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  energyType: EnergyType;
  static instanceNecromancerCount = 0;  

  constructor(name: string, special = 0, cost = 0) {
    super(name, special, cost);
    this.energyType = 'mana';
    Necromancer.instanceNecromancerCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instanceNecromancerCount;
  }
}
