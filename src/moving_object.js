// const Game = require('./game.js');

function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
}

MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;

    ctx.beginPath();

    ctx.arc(
        this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
        // x, y, radius, starting angle, ending angle, counter clockwise
    );

    ctx.fill();
}

MovingObject.prototype.move = function() {
    this.pos = this.game.wrap(this.pos);
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    // this.draw(ctx);
};

MovingObject.prototype.isCollidedWith = function isCollidedWith(otherObject) {
    let pos1 = this.pos;
    let pos2 = otherObject.pos;
    let centerDist = Math.sqrt(
        Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
    );
    return centerDist < (this.radius + otherObject.radius);
};

// will get rid of:

MovingObject.prototype.collideWith = function collideWith(otherObject){
    this.game.remove(this);
    this.game.remove(otherObject);
};


module.exports = MovingObject;