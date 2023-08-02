import { IsArray, IsNumber } from 'class-validator';

export class GetMultiplesNumbersDto {
  @IsArray({ message: "O campo 'multiplesOf' deve ser um array" })
  @IsNumber(
    {
      maxDecimalPlaces: 0,
    },
    {
      each: true,
      message: "Os valores do campo 'multiplesOf' devem ser números inteiros",
    },
  )
  multiplesOf: number[];

  @IsNumber(
    {
      maxDecimalPlaces: 0,
    },
    {
      message: "O campo 'limit' deve ser um número inteiro",
    },
  )
  limit: number;
}
