const Greeter = require('../implementation/Greeter')
const { assert } = require('chai');
const sinon = require('sinon');

describe('Greeter', function () {
    it('input is greeted', () => {
        const greeter = new Greeter();// no date, default hello
        const input = 'Kevin'
        const output = greeter.greet(input);

        assert.equal(output, 'Hello Kevin')

    })

    it('greeting is trimmed', () => {
        const greeter = new Greeter(); // no date, default hello
        const input = 'Kevin '
        const output = greeter.greet(input);

        assert.equal(output, 'Hello Kevin')
    })

    it('greeting\'s first name letter is capitalized', () => {
        const greeter = new Greeter(); // no date, default hello
        const input = 'kevin'
        const output = greeter.greet(input);

        assert.equal(output, 'Hello Kevin')
    })


    it('Good morning greeting', () => {
        const mockDate = new Date().setHours(6);
        const greeter = new Greeter(mockDate);
        const name = 'Kevin'
        const output = greeter.greet(name);

        assert.equal(output, 'Good morning Kevin')
    })

    it('Good evening greeting', () => {
        const mockDate = new Date().setHours(18);
        const greeter = new Greeter(mockDate);
        const name = 'Kevin'
        const output = greeter.greet(name);

        assert.equal(output, 'Good evening Kevin')
    })

    it('Good night greeting', () => {
        const mockDate = new Date().setHours(22);
        const greeter = new Greeter(mockDate);
        const name = 'Kevin'
        const output = greeter.greet(name);

        assert.equal(output, 'Good night Kevin')
    })

    it('Console log printed', () => {
        const spy = sinon.spy(console, "log")

        const greeter = new Greeter();
        const name = 'Kevin'
        greeter.greet(name);

        assert(spy.calledWith('Hello Kevin'))
        console.log.restore();
    })

})