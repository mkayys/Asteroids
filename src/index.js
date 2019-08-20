// console.log("Webpack is working!");

const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Util = require("./util.js");
const Game = require("./game.js");

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('game-canvas');

    const ctx = canvas.getContext('2d');
    
    const mo = new MovingObject(
        { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00" }
    );

    // mo.draw(ctx);
    // mo.move();
    // mo.draw(ctx);
    window.ctx = ctx;
    window.canvas = canvas;

    window.MovingObject = MovingObject;
    window.move = MovingObject.move;
    window.draw = MovingObject.draw;
    window.Asteroid = Asteroid;
    window.Util = Util;
    window.Game = Game;

    console.log('webpack is working!');
});
