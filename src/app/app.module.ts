import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarbonFootprintComponent } from './components/carbon-footprint/carbon-footprint.component';
import { CarbonFootprintFormComponent } from './components/carbon-footprint-form/carbon-footprint-form.component';
import { CarbonFootprintResultComponent } from './components/carbon-footprint-result/carbon-footprint-result.component';
import {registerLocaleData} from "@angular/common";
import * as fr from '@angular/common/locales/fr';
import {CarbonFootprintComputeService} from "./services/carbon-footprint-compute.service";
import { AuthComponent } from './components/auth/auth.component';
import {FormsModule} from "@angular/forms";
import { EditTravelComponent } from './components/edit-travel/edit-travel.component';
import { RegisterComponent } from './components/register/register.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarbonFootprintComponent,
    CarbonFootprintFormComponent,
    CarbonFootprintResultComponent,
    AuthComponent,
    EditTravelComponent,
    RegisterComponent,
    MenuHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'fr-FR'
    },
    [CarbonFootprintComputeService]
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
