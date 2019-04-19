import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ShowTimesPageComponent } from './pages/show-times-page/show-times-page.component';
import { ComingSoonPageComponent } from './pages/coming-soon-page/coming-soon-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '*', redirectTo: '404'},
  { path: '', component: HomePageComponent },
  { path: 'showtimes', component: ShowTimesPageComponent },
  { path: 'coming-soon', component: ComingSoonPageComponent },
  { path: '404', component: NotFoundPageComponent },
  { path: 'error', component: ErrorPageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
