import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Person } from '../../../../core/models/people.model';

@Component({
  selector: 'app-person-overview',
  templateUrl: './person-overview.component.html',
  styleUrls: ['./person-overview.component.scss']
})
export class PersonOverviewComponent implements OnInit {

  @Input() person!: Person;
  @Output() selected = new EventEmitter<Person>();

  constructor() { }

  ngOnInit(): void {
  }

  select(): void {
    this.selected.emit(this.person);
  }
}
