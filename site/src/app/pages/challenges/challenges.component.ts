import { Component } from '@angular/core';

import { ChallengesService } from 'src/app/shared/services/challenges/challenges.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent {
  multiplesOf = [3, 5]
  multiplesBelow = 1000;
  multiples = null;

  fibonacciLimit = 4000000;
  fibonacciPairsSum = null;

  numberToFactorate = 600851475143;
  largestPrime = null;

  constructor(
    private challengesService: ChallengesService
  ) {}

  solveMultipleNumbers() {
    this.challengesService.solveChallenge(
      'multiples-of',
      {
        multiplesOf: this.multiplesOf.map(number => Number(number)),
        limit: Number(this.multiplesBelow - 1)
      }
    ).subscribe({
      next: d => this.multiples = d.answer
    })
  }

  solveFibonacci() {
    this.challengesService.solveChallenge(
      'fibonacci',
      {
        limit: Number(this.fibonacciLimit)
      }
    ).subscribe({
      next: d => this.fibonacciPairsSum = d.answer
    })
  }

  solvePrimeFactors() {
    this.challengesService.solveChallenge(
      'prime-factors',
      {
        number: Number(this.numberToFactorate)
      }
    ).subscribe({
      next: d => this.largestPrime = d.answer
    })
  }
}
