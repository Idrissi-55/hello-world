import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.sass']
})
export class EnfantComponent implements OnInit {

  @Input() public heritage! : string;
  @Output() unEvenement = new EventEmitter();

  constructor() {
    this.heritage = '';
  }

  ngOnInit(): void {

  }

}
