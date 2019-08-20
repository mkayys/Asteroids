const MovingObject = require('./moving_object.js');
const Game = require('./game.js');

function GameView(game, ctx) {
    this.game = game;
    this.ctx = ctx;

    this.start = this.start.bind(this);
};


GameView.prototype.start = function start() {
    const that = this;
    // console.log(this.game);
    setInterval(function() {
        that.game.moveObjects();
        that.game.draw(that.ctx);
    }, 20);

};

// GameView.prototype.animate = function animate(time) {

// }

module.exports = GameView;