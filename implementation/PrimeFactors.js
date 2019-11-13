class PrimeFactors {
    constructor() {
    }

    generate(number) {
        let result = [];

        for (let i = 2, j = 2; i <= number; i++) {
            let isPrime = number % i === 0;
            if (isPrime) {
                result.push(i);
                number /= i;
            }
            while (isPrime) {
                if (number % i === 0) {
                    result.push(i);
                    number /= i;
                } else {
                    isPrime = false;
                }
            }
        }

        return result;
    }

}

module.exports = PrimeFactors;