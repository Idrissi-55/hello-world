import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MonPremierComposantComponent } from './composants/mon-premier-composant/mon-premier-composant.component';
import { ParentComponent } from './composants/parent/parent.component';
import { EnfantComponent } from './composants/enfant/enfant.component';
import { UtilisationServiceComponent } from './composants/utilisation-service/utilisation-service.component';
import { EmissionComponent } from './composants/emission/emission.component';

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComposantComponent,
    ParentComponent,
    EnfantComponent,
    UtilisationServiceComponent,
    EmissionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
