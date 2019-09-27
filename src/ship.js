const MovingObject = require('./moving_object.js');


function Ship(pos, game) {
    this.RADIUS = 10;
    this.COLOR = "purple";
    this.SPEED = 5;
    this.vel = [0,0]
    MovingObject.call(this, { pos: pos.pos, vel: [0, 0], color: this.COLOR, radius: this.RADIUS, game: game });
}

module.exports = Ship;