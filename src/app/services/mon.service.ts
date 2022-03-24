import { EventEmitter, Inject, Injectable } from '@angular/core';
import { Voiture } from '../modeles/Voiture';

@Injectable({
  providedIn: 'root'
})
export class MonService {

  private _lattributDeMonService: string;
  public unNombre: number;
  public evt: EventEmitter<number>;

  constructor(
  ) {
    this._lattributDeMonService = "L'attribut de mon service";
    this.unNombre = 0;
    this.evt = new EventEmitter<number>();
  }

  public emettre() {
    let tesla = new Voiture();
    this.unNombre++;
    this.evt.emit(this.unNombre);
  }

  get lattributDeMonService(): string {
    return this._lattributDeMonService;
  }

  set lattributDeMonService(value: string) {
    this._lattributDeMonService = value;
  }

  public laMethodeDeMonService(): void {
    this.affichage();
  }

  private affichage(): void {
    console.log("La méthode de mon service.")
  }
}
