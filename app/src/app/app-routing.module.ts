import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolutionOverviewComponent } from './pages/solution-overview/solution-overview.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: 'Lösungen', component: SolutionOverviewComponent },
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
