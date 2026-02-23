var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    Player.prototype.updateHealth = function (health) {
        if (health === void 0) { health = 10; }
        this.health -= health;
    };
    Player.prototype.suaraPlayer = function () {
        console.log("".concat(this.name, " bersuara..."));
    };
    return Player;
}());
//inheritance (pewarisan)
var Mage = /** @class */ (function (_super) {
    __extends(Mage, _super);
    function Mage(name, health, mana) {
        var _this = _super.call(this, name, health) || this;
        _this.mana = mana;
        return _this;
    }
    Mage.prototype.attack = function (enemy) {
        console.log("".concat(this.name, " menyerang ").concat(enemy.name));
        enemy.updateHealth(5);
        console.log("".concat(enemy.name, " teriak kesakitan"));
    };
    Mage.prototype.freeze = function (enemy) {
        console.log("".concat(this.name, " freeze ").concat(enemy.name));
        enemy.updateHealth(20);
        this.mana -= 10;
        console.log("".concat(enemy.name, " freeze"));
        console.log("mana tersisa: ".concat(this.mana));
    };
    Mage.prototype.suaraPlayer = function () {
        console.log("".concat(this.name, " bersuara \"saya adalah mage terbaik\""));
    };
    return Mage;
}(Player));
var Fighter = /** @class */ (function (_super) {
    __extends(Fighter, _super);
    function Fighter(name, health) {
        return _super.call(this, name, health) || this;
    }
    Fighter.prototype.suaraPlayer = function () {
        console.log("".concat(this.name, " bersuara \"saya adalah fighter\""));
    };
    return Fighter;
}(Player));
var eudora = new Mage("eudora", 100, 40);
var zilong = new Fighter("zilong", 100);
var player2 = new Player("dino2", 100);
// eudora.freeze(player2);
// eudora.attack(player2);
// zilong.suaraPlayer();
eudora.attack(zilong);
console.log(zilong);
