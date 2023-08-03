import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'challenges',
    loadChildren: () => import('./pages/challenges/challenges.module').then(m => m.ChallengesModule)
  },
  {
    path: '**',
    redirectTo: 'challenges'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
