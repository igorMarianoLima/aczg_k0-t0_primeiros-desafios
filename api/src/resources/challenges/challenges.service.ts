import { Injectable } from '@nestjs/common';

import { MultiplesNumbersChallenge } from './entities/multiplesNumbersChallenge.entity';
import { SolvedChallengeDto } from './dto/solved-challenge.dto';

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
}
