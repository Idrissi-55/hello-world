import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MonService } from '../../services/mon.service';
import { take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-utilisation-service',
  templateUrl: './utilisation-service.component.html',
  styleUrls: ['./utilisation-service.component.sass']
})
export class UtilisationServiceComponent implements OnInit, OnDestroy {

  public uneVariable : string | undefined;
  public unAttribut: number;

  constructor(
    @Inject(MonService) private svc: MonService
  ) {
    this.unAttribut = 0;
  }

  ngOnInit(): void {
    this.svc.laMethodeDeMonService();
    this.uneVariable = this.svc.lattributDeMonService;
    this.svc.evt.pipe(take(5)).subscribe(
      (leNombreEmit) => {
        console.log(leNombreEmit);
      }
    );
  }

  ngOnDestroy(): void {
    this.svc.evt.unsubscribe();
  }

}
