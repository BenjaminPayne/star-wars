import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Person } from '../../../../core/models/person.model';

@Component({
  selector: 'app-person-overview',
  templateUrl: './person-overview.component.html',
  styleUrls: ['./person-overview.component.scss']
})
export class PersonOverviewComponent implements OnInit {

  @Input() person!: Person;

  constructor() { }

  ngOnInit(): void {
  }

}
