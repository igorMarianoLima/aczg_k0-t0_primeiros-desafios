import { IsNumber, IsPositive, Max } from 'class-validator';

export class GetFibonacciPairsSumDto {
  @IsNumber({
    maxDecimalPlaces: 0,
  })
  @Max(4000000)
  @IsPositive()
  limit: number;
}
