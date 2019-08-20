const MovingObject = require("./moving_object.js");

const DEFAULTS = {
    COLOR: "#505050",
    RADIUS: 25,
    SPEED: 4
};


function Asteroid(options) {
    options.pos = options.pos;
    options.vel = Util.randomVec(DEFAULTS.SPEED);
    options.radius = DEFAULTS.RADIUS;
    options.color = DEFAULTS.COLOR;

    Util.inherits(this, MovingObject);

};

module.exports = Asteroid;