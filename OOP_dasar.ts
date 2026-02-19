
//Game in OOP
class Player {
    name: string;
    private health: number;
    constructor(name: string, health: number) {
        this.name = name;
        this.health = health;
    }
    attack(enemy: Player) {
        console.log(`${this.name} menyerang ${enemy.name}`);
        enemy.health -= 10;
        console.log(`${enemy.name} teriak kesakitan`);
        if (enemy.health <= 20) {
            console.log(`${enemy.name} mati...`);
        }
        console.log(`${enemy.name} sisa health: ${enemy.health}`);
    }
}

let player1 = new Player("dino1", 100);
let player2 = new Player("dino2", 100);


player1.attack(player2)
player1.attack(player2)
player1.attack(player2)
player1.attack(player2)
player1.attack(player2)
player1.attack(player2)
player1.attack(player2)
player1.attack(player2)
player1.attack(player2)
