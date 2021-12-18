import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Planet } from '../../../../core/models/planet.model';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {

  @Output() selected = new  EventEmitter<Planet>();

  @Input() planets: Planet[] = [];

  constructor() {
  }

  ngOnInit(): void { }

  select(planet: Planet): void {
    this.selected.emit(planet);
  }

}
