import { Challenge } from './challenge.entity';

export class PrimeNumbersChallenge extends Challenge {
  solveChallenge(number: number) {
    const primeFactors = [];

    const factoreByPrime = (number: number) => {
      for (let factor = 2; factor <= number; factor++) {
        const firstPrimeFactors = [2, 3, 5, 7];

        if (factor === number) {
          primeFactors.push(factor);
          break;
        }

        if (firstPrimeFactors.some((factor) => number % factor === 0)) {
          const prime = firstPrimeFactors.find(
            (factor) => number % factor === 0,
          );

          primeFactors.push(prime);
          factoreByPrime(number / prime);

          return;
        }

        if (number % factor === 0) {
          primeFactors.push(factor);
          factoreByPrime(number / factor);

          break;
        }
      }
    };

    factoreByPrime(number);

    this.answer = Math.max(...primeFactors).toString();
    return this.answer;
  }
}
