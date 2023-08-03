import { Injectable } from '@nestjs/common';

import { MultiplesNumbersChallenge } from './entities/multiplesNumbersChallenge.entity';
import { SolvedChallengeDto } from './dto/solved-challenge.dto';
import { FibonacciNumbersChallenge } from './entities/fibonacciNumbersChallenge.entity';
import { PrimeNumbersChallenge } from './entities/primeNumbersChallenge.entity';

@Injectable()
export class ChallengesService {
  solveMultiplesNumbers(
    multiplesOf: number[],
    limit: number,
  ): SolvedChallengeDto {
    const challenge = new MultiplesNumbersChallenge(
      `Múltiplos de ${multiplesOf.join(', ')}`,
    );

    challenge.solveChallenge(multiplesOf, limit);

    return challenge;
  }

  solveFibonacci(fibonacciLimit: number): SolvedChallengeDto {
    const challenge = new FibonacciNumbersChallenge(
      `Soma dos termos pares da sequência Fibonacci`,
    );

    challenge.solveChallenge(fibonacciLimit);

    return challenge;
  }

  solvePrimeFactors(number: number): SolvedChallengeDto {
    const challenge = new PrimeNumbersChallenge(`Fatores primos`);
    challenge.solveChallenge(number);

    return challenge;
  }
}
