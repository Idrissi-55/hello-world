import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-premier-composant',
  templateUrl: './mon-premier-composant.component.html',
  styleUrls: ['./mon-premier-composant.component.sass']
})
export class MonPremierComposantComponent implements OnInit {

  public unNombre = 52;
  public unTableau = [0, 1, 1, 2, 3, 5, 8, 13, 21]; // Fibonacci

  constructor() { }

  ngOnInit(): void {
  }

}
