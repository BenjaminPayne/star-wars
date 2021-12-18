import { Component, Input, OnInit } from '@angular/core';
import { Planet } from '../../../../core/models/planet.model';

@Component({
  selector: 'app-planet-info',
  templateUrl: './planet-info.component.html',
  styleUrls: ['./planet-info.component.scss']
})
export class PlanetInfoComponent implements OnInit {

  @Input() planet!: Planet;

  constructor() { }

  ngOnInit(): void {
  }

}
