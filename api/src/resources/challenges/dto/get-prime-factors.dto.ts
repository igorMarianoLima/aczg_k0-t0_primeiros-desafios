import { IsNumber, IsPositive } from 'class-validator';

export class GetPrimeFactorsDto {
  @IsNumber({
    maxDecimalPlaces: 0,
  })
  @IsPositive()
  number: number;
}
