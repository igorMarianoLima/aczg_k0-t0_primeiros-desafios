import { Controller, Get, Body } from '@nestjs/common';
import { ChallengesService } from './challenges.service';

import { GetMultiplesNumbersDto } from './dto/get-multiples-numbers.dto';
import { GetFibonacciPairsSumDto } from './dto/get-fibonacci-pairs-sum.dto';
import { GetPrimeFactorsDto } from './dto/get-prime-factors.dto';

@Controller('challenges')
export class ChallengesController {
  constructor(private readonly challengesService: ChallengesService) {}

  @Get('multiples-of')
  solveMultiplesNumber(@Body() body: GetMultiplesNumbersDto) {
    return this.challengesService.solveMultiplesNumbers(
      body.multiplesOf,
      body.limit,
    );
  }

  @Get('fibonacci')
  solveFibonacciPairsTermsSum(@Body() body: GetFibonacciPairsSumDto) {
    return this.challengesService.solveFibonacci(body.limit);
  }

  @Get('prime-factors')
  solvePrimeFactors(@Body() body: GetPrimeFactorsDto) {
    return this.challengesService.solvePrimeFactors(body.number);
  }
}
