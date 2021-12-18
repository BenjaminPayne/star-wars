import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanetComponent } from './pages/planet/planet.component';
import { PlanetsComponent } from './pages/planets/planets.component';

const routes: Routes = [
  { path: '', component: PlanetsComponent },
  { path: ':id', component: PlanetComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
