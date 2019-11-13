const BowlingGame = require('../implementation/BowlingGame')
const { assert, expect } = require('chai');

describe('BowlingGame', function () {
    let game;

    beforeEach(() => {
        game = new BowlingGame();
    });

    it('gutter game', () => {
        rollMany(20, 0);
        assert.equal(game.getScore(), 0);
    });

    it('all 1s', () => {
        rollMany(20, 1);
        assert.equal(game.getScore(), 20);
    });

    it('one spare', () => {
        rollSpare();
        game.roll(3);
        rollMany(17, 0);
        assert.equal(game.getScore(), 16);
    });

    it('one strike', () => {
        rollStrike();
        game.roll(3);
        game.roll(4);
        rollMany(16, 0);
        assert.equal(game.getScore(), 24);
    });

    it('perfect game', () => {
        rollMany(12, 10);
        assert.equal(game.getScore(), 300);
    });

    function rollMany(n, pins) {
        for (let i = 0; i < n; i++) {
            game.roll(pins);
        }
    }

    function rollSpare() {
        game.roll(5);
        game.roll(5);
    }

    function rollStrike() {
        game.roll(10);
    }
})