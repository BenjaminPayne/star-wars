import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { PersonInfoComponent } from './components/person-info/person-info.component';
import { PersonOverviewComponent } from './components/person-overview/person-overview.component';
import { PlanetInfoComponent } from './components/planet-info/planet-info.component';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { PlanetComponent } from './pages/planet/planet.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { PersonPipe } from './pipes/person.pipe';
import { PopulationPipe } from './pipes/population.pipe';
import { PlanetsRoutingModule } from './planets-routing.module';

@NgModule({
  declarations: [
    PlanetInfoComponent,
    PlanetListComponent,
    PlanetComponent,
    PlanetsComponent,
    PersonPipe,
    PersonOverviewComponent,
    PersonInfoComponent,
    PopulationPipe,
  ],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    SharedModule
  ],
  providers: [
    DecimalPipe
  ]
})
export class PlanetsModule { }
