import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'planets', pathMatch: 'full'
  },
  {
    path: 'planets', loadChildren: () => import('./screens/planets/planets.module').then(m => m.PlanetsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
