
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
    updateHealth(health: number = 10) {
        this.health -= health;
    }
    suaraPlayer() {
        console.log(`${this.name} bersuara...`);
    }
}

//inheritance (pewarisan)
class Mage extends Player {
    private mana: number;
    constructor(name: string, health: number, mana: number) {
        super(name, health);
        this.mana = mana;
    }

    attack(enemy: Player) {
        console.log(`${this.name} menyerang ${enemy.name}`);
        enemy.updateHealth(5);
        console.log(`${enemy.name} teriak kesakitan`);
    }

    freeze(enemy:Player) {
        console.log(`${this.name} freeze ${enemy.name}`);
        enemy.updateHealth(20);
        this.mana -= 10;
        console.log(`${enemy.name} freeze`);
        console.log(`mana tersisa: ${this.mana}`);
    }
    suaraPlayer() {
        console.log(`${this.name} bersuara "saya adalah mage terbaik"`);
    }
}

class Fighter extends Player {
    constructor(name: string, health: number) {
        super(name, health);
    }

    suaraPlayer() {
        console.log(`${this.name} bersuara "saya adalah fighter"`);
    }
}




let eudora = new Mage("eudora", 100, 40);
let zilong = new Fighter("zilong", 100);
let player2 = new Player("dino2", 100);

// eudora.freeze(player2);
// eudora.attack(player2);
// zilong.suaraPlayer();
eudora.attack(zilong);
console.log(zilong);
