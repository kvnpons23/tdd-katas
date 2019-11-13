const PrimeFactors = require('../implementation/PrimeFactors')
const { assert, expect } = require('chai');

describe('PrimeFactors', function () {
    it('1 should return []', () => {
        const primeFactors = new PrimeFactors();
        expect(primeFactors.generate(1)).to.be.an('array').that.is.empty;
    })

    it('2 should return [2]', () => {
        const primeFactors = new PrimeFactors();
        expect(primeFactors.generate(2)).to.include.members([2])
    })

    it('3 should return [3]', () => {
        const primeFactors = new PrimeFactors();
        expect(primeFactors.generate(3)).to.include.members([3])
    })

    it('4 should return [2,2]', () => {
        const primeFactors = new PrimeFactors();
        expect(primeFactors.generate(4)).to.include.members([2, 2])
    })

    it('5 should return [5]', () => {
        const primeFactors = new PrimeFactors();
        expect(primeFactors.generate(5)).to.include.members([5])
    })

    it('6 should return [2,3]', () => {
        const primeFactors = new PrimeFactors();
        expect(primeFactors.generate(6)).to.include.members([2, 3])
    })

    it('7 should return [7]', () => {
        const primeFactors = new PrimeFactors();
        expect(primeFactors.generate(7)).to.include.members([7])
    })

    it('8 should return [2,2,2]', () => {
        const primeFactors = new PrimeFactors();
        expect(primeFactors.generate(8)).to.include.members([2, 2, 2])
    })

    it('9 should return [3,3]', () => {
        const primeFactors = new PrimeFactors();
        expect(primeFactors.generate(9)).to.include.members([3, 3])
    })

    it('4620 should return [2,2,3,5,7,11]', () => {
        const primeFactors = new PrimeFactors();
        expect(primeFactors.generate(4620)).to.include.members([2, 2, 3, 5, 7, 11])
    })
})