import { Challenge } from './challenge.entity';

export class MultiplesNumbersChallenge extends Challenge {
  public solveChallenge(multiplesOf: number[], limit: number): number {
    let numbersMultiplesSum = 0;

    for (let number = 1; number <= limit; number++) {
      if (multiplesOf.some((multiplier) => number % multiplier === 0)) {
        numbersMultiplesSum += number;
      }
    }

    this.answer = numbersMultiplesSum;
    return this.answer;
  }
}
