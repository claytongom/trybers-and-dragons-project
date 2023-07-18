import Energy from '../Energy';

export default interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;

  // metodo ataque do lutador
  // metodo especial do lutador
  // metodo de aumento de nivel do lutador
  // metodo de recebimento de dano do lutador
  attack(enemy: Fighter): void;  
  special?(enemy: Fighter): void;  
  levelUp(): void;  
  receiveDamage(attackPoints: number): number;
}