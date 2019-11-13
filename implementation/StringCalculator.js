class StringCalculator {
    constructor() {
    }

    add(stringNumbers) {

        let addedNum = 0;

        if (stringNumbers && stringNumbers.length > 0) {
            const numbers = this.extractNumbers(stringNumbers);
            numbers.forEach(number => {
                if (number < 0) {
                    throw new Error('negatives not allowed')
                }

                if (number <= 1000) {
                    addedNum += number
                }
            });
        }

        return addedNum;
    }

    extractNumbers(args) {
        return args.match(/-?\d+/g).map(Number);
    }

}

module.exports = StringCalculator;