export default class Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  
  constructor(lifePoints: number, strength: number, defense: number) {
    this.lifePoints = lifePoints;
    this.strength = strength;
    this.defense = defense;
  }
  
  attack(enemy: Fighter): void {
    const attackPoints = this.strength - enemy.defense;
    if (attackPoints > 0) {
      enemy.receiveDamage(attackPoints);
    }
  }
  
  receiveDamage(attackPoints: number): number {
    this.lifePoints -= attackPoints;
    return this.lifePoints;
  }
}
