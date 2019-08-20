function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
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
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    // this.draw(ctx);
};

module.exports = MovingObject;