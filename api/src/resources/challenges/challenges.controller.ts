import { Controller, Get, Body } from '@nestjs/common';
import { ChallengesService } from './challenges.service';

import { GetMultiplesNumbersDto } from './dto/get-multiples-numbers.dto';

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
}
