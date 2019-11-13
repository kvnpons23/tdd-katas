const StringCalculator = require('../implementation/StringCalculator')
const { assert, expect } = require('chai');

describe('StringCalculator', function () {
    it('Empty string returns zero', () => {
        const strCalc = new StringCalculator();
        assert.equal(strCalc.add(''), 0)
    })

    it('Returns single number', () => {
        const strCalc = new StringCalculator();
        assert.equal(strCalc.add('1'), 1)
    })

    it('Two numbers, comma delimited, returns the sum', () => {
        const strCalc = new StringCalculator();
        assert.equal(strCalc.add('1,2'), 3)
    })

    it('Two numbers, newline delimited, returns the sum', () => {
        const strCalc = new StringCalculator();
        assert.equal(strCalc.add('1\n2'), 3)
    })

    it('Four numbers, delimited either way, returns the sum', () => {
        const strCalc = new StringCalculator();
        assert.equal(strCalc.add('1\n2,3\n4'), 10)
    })

    it('Throw negative not allowed', () => {
        const strCalc = new StringCalculator();
        expect(() => strCalc.add('1,-2,-3')).to.throw('negatives not allowed')
    })

    it('Numbers greater than 1000 are ignored', () => {
        const strCalc = new StringCalculator();
        assert.equal(strCalc.add('1\n1001,3\n4'), 8)
    })

    it('Single char delimiter can be defined on the first line starting with', () => {
        const strCalc = new StringCalculator();
        assert.equal(strCalc.add('#\n1#2'), 3)
    })

    it('Multi char delimiter can be defined on the first line starting with', () => {
        const strCalc = new StringCalculator();
        assert.equal(strCalc.add('####\n1#####2'), 3)
    })

})