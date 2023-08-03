export abstract class Challenge {
  title: string;
  answer: string;

  constructor(title: string) {
    this.title = title;
    this.answer = '';
  }
}
