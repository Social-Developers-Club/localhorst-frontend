import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolutionOverviewComponent } from './solution-overview/solution-overview.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'Lösungen', component: SolutionOverviewComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
