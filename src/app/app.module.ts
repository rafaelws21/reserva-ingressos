import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodapeComponent } from './layout/rodape/rodape.component';
import { TopoComponent } from './layout/topo/topo.component';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    TopoComponent
  ],
  imports: [
    // Angular
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    NgxMaskModule.forRoot({ dropSpecialCharacters: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
