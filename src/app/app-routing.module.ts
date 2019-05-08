import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'list-notes', loadChildren: './list-notes/list-notes.module#ListNotesPageModule' },
  { path: 'list-quiz', loadChildren: './list-quiz/list-quiz.module#ListQuizPageModule' },
  { path: 'sign-in', loadChildren: './sign-in/sign-in.module#SignInPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'chapter01', loadChildren: './chapter01/chapter01.module#Chapter01PageModule' },
  { path: 'chapter02', loadChildren: './chapter02/chapter02.module#Chapter02PageModule' },
  { path: 'chapter05', loadChildren: './chapter05/chapter05.module#Chapter05PageModule' },
  { path: 'chapter03', loadChildren: './chapter03/chapter03.module#Chapter03PageModule' },
  { path: 'chapter04', loadChildren: './chapter04/chapter04.module#Chapter04PageModule' },
  { path: 'chapter06', loadChildren: './chapter06/chapter06.module#Chapter06PageModule' },
  { path: 'chapter07', loadChildren: './chapter07/chapter07.module#Chapter07PageModule' },
  { path: 'coming-soon', loadChildren: './coming-soon/coming-soon.module#ComingSoonPageModule' },
  { path: 'chapter10', loadChildren: './chapter10/chapter10.module#Chapter10PageModule' },
  { path: 'exercise', loadChildren: './exercise/exercise.module#ExercisePageModule' },
  { path: 'mid-sem-exercise', loadChildren: './mid-sem-exercise/mid-sem-exercise.module#MidSemExercisePageModule' },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
