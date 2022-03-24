import { Component, Inject, OnInit } from '@angular/core';
import { MonService } from '../../services/mon.service';

@Component({
  selector: 'app-emission',
  templateUrl: './emission.component.html',
  styleUrls: ['./emission.component.sass']
})
export class EmissionComponent implements OnInit {

  constructor(
    @Inject(MonService) private svc: MonService
  ) { }

  ngOnInit(): void {
  }

  clic() {
    this.svc.emettre();
  }
}
