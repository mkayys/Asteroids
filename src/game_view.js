const MovingObject = require('./moving_object.js');
const Game = require('./game.js');

function GameView(game, ctx) {
    this.game = game;
    this.ctx = ctx;

};


GameView.prototype.start = function() {

    setInterval(function() {
        this.game.moveObjects;
        this.game.draw(this.ctx);
    }, 20);

};

module.exports = GameView;