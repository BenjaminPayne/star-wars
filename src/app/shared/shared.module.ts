import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PropertyDisplayComponent } from './components/property-display/property-display.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    PropertyDisplayComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    CardComponent,
    PropertyDisplayComponent
  ]
})
export class SharedModule { }
