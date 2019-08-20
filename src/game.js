const Asteroid = require("./asteroid");
const Util = require("./util");

Game.DIM_X = 700;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 10;

function Game() {
    this.asteroids = [];
    this.addAsteroids();
};

Game.prototype.addAsteroids = function addAsteroids() {
    for(let i=0; i < Game.NUM_ASTEROIDS; i++) {
        this.asteroids.push(new Asteroid({ pos: this.randomPosition()}));
    }
};

Game.prototype.randomPosition = function randomPosition() {

    return [
        Game.DIM_X * Math.random(),
        Game.DIM_Y * Math.random()
    ]
};

Game.prototype.draw = function (ctx) {
    ctx.clearRect();
    
    this.asteroids.forEach( function(asteroid) {
        asteroid.draw(ctx);
    });
};

Game.prototype.moveObjects = function () {

    this.asteroids.forEach(function(asteroid) {
        asteroid.move();
    })
};