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
        this.asteroids.push(new Asteroid({ game: this }));
    }
};

Game.prototype.randomPosition = function randomPosition() {

    return [
        Game.DIM_X * Math.random(),
        Game.DIM_Y * Math.random()
    ]
};

Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    
    this.asteroids.forEach( function(asteroid) {
        asteroid.draw(ctx);
    });
};

Game.prototype.moveObjects = function () {

    this.asteroids.forEach(function(asteroid) {
        asteroid.move();
    })
};


Game.prototype.wrap = function (pos) {
    if(pos[0] > Game.DIM_X) {
        pos[0] = 0;
    } else if (pos[0] < 0) {
        pos[0] = Game.DIM_X;
    } else if (pos[1] > Game.DIM_Y) {
        pos[1] = 0;
    } else if (pos[1] < 0) {
        pos[1] = Game.DIM_Y;
    }

    return pos;
};

module.exports = Game;