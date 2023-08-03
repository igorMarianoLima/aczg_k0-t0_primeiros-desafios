import { Challenge } from './challenge.entity';

export class FibonacciNumbersChallenge extends Challenge {
  public solveChallenge(limit: number): number {
    let pairsTermsSum = 2;

    const fibonacciSequence = (penultime = 1, lastNumber = 2) => {
      const fibonacciNumber = penultime + lastNumber;

      if (fibonacciNumber <= limit) {
        if (fibonacciNumber % 2 === 0) {
          pairsTermsSum += fibonacciNumber;
        }

        fibonacciSequence(lastNumber, penultime + lastNumber);
      }
    };

    fibonacciSequence();
    this.answer = pairsTermsSum;

    return this.answer;
  }
}
