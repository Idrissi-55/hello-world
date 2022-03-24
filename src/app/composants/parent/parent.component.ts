import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass']
})
export class ParentComponent implements OnInit {

  public ceQueJaiAtransmettre : string = "bien immobilier";
  public heritage : string = "bien immobilier";

  constructor() { }

  ngOnInit(): void {
  }

  unEvenementDuFils() {
    console.log("Mon fils a produit un évènement.");
  }
}
