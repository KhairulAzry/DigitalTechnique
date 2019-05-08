import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MidSemExercisePage } from './mid-sem-exercise.page';

const routes: Routes = [
  {
    path: '',
    component: MidSemExercisePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MidSemExercisePage]
})
export class MidSemExercisePageModule {}
