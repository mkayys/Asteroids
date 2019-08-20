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

Game.prototype.checkCollisions = function() {
    
    const asteroids = this.asteroids;
    for (let i=0; i < asteroids.length; i++) {
        for (let j=0; j< asteroids.length; j++) {
            if (i !== j) {
                const obj1 = asteroids[i];
                const obj2 = asteroids[j];
                // debugger
                if(obj1.isCollidedWith(obj2)) {
                    if(obj1.collideWith(obj2)) {
                        return;
                    }
                }

            }
        }
    }
};

Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
}

// will get rid of:

Game.prototype.remove = function(asteroid) {
    this.asteroids.splice(this.asteroids.indexOf(asteroid), 1);
};

module.exports = Game;