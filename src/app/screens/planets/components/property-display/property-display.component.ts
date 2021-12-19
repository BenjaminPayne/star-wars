import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-display',
  templateUrl: './property-display.component.html',
  styleUrls: ['./property-display.component.scss']
})
export class PropertyDisplayComponent implements OnInit {

  @Input() description!: string;
  @Input() value?: any;

  constructor() { }

  ngOnInit(): void {
  }

}
