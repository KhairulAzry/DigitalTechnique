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
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
