export abstract class Challenge {
  title: string;
  answer: number;

  constructor(title: string) {
    this.title = title;
    this.answer = 0;
  }

  public abstract solveChallenge(multiplesOf: number[], limit: number): number;
}
