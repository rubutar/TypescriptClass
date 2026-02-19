//Game in OOP
var Player = /** @class */ (function () {
    function Player(name, health) {
        this.name = name;
        this.health = health;
    }
    Player.prototype.attack = function (enemy) {
        console.log("".concat(this.name, " menyerang ").concat(enemy.name));
        enemy.health -= 10;
        console.log("".concat(enemy.name, " teriak kesakitan"));
        if (enemy.health <= 20) {
            console.log("".concat(enemy.name, " mati..."));
        }
        console.log("".concat(enemy.name, " sisa health: ").concat(enemy.health));
    };
    return Player;
}());
var player1 = new Player("dino1", 100);
var player2 = new Player("dino2", 100);
player1.attack(player2);
player1.attack(player2);
player1.attack(player2);
player1.attack(player2);
player1.attack(player2);
player1.attack(player2);
player1.attack(player2);
player1.attack(player2);
player1.attack(player2);
