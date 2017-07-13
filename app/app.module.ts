import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SaludoComponent} from './saludo.componet';
import { ControlComponent } from './control/control.component';
import { AddRemoveDomComponent } from './add-remove-dom/add-remove-dom.component';
import { UseNgForComponent } from './use-ng-for/use-ng-for.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component'
import { RestcountriesService} from './restcountries.service';
import { CountryComponent } from './country/country.component';


@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ControlComponent,
    AddRemoveDomComponent,
    UseNgForComponent,
    TwowaybindingComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RestcountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
