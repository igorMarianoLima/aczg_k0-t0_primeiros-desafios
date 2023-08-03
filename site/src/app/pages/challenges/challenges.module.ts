import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengesRoutingModule } from './challenges-routing.module';
import { ChallengesComponent } from './challenges.component';

import { CoreModule } from 'src/app/core/core.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChallengesComponent
  ],
  imports: [
    CommonModule,
    ChallengesRoutingModule,
    CoreModule,
    FormsModule
  ]
})
export class ChallengesModule { }
