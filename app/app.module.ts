import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SaludoComponent} from './saludo.componet';
import { ControlComponent } from './control/control.component';
import { AddRemoveDomComponent } from './add-remove-dom/add-remove-dom.component';
import { UseNgForComponent } from './use-ng-for/use-ng-for.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component'

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ControlComponent,
    AddRemoveDomComponent,
    UseNgForComponent,
    TwowaybindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
