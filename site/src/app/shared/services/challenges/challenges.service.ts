import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ChallengesService {
  private readonly apiBaseUrl = environment.API_URL_BASE;

  constructor(
    private http: HttpClient
  ) { }

  solveChallenge(challengeEndpoint: string, body: any) {
    return this.http.post<any>(`${this.apiBaseUrl}/challenges/${challengeEndpoint}`, body)
  }
}
