import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public titre = 'CAP GEMINI';
  public image = "monChat.jpg";
  public prenom = '';
  public unAttrTypeScript = 'rouge';
  public maintenant = new Date();

  public jaiClique() {
    this.titre = "ENI ECOLE";
  }

}
