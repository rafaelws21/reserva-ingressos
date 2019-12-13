import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './pages/form/form.component';
import { EnderecoFormComponent } from './components/endereco-form/endereco-form.component';
import { ReservaIngressoRouting } from './reserva-ingresso-routing.module';

@NgModule({
  declarations: [
    FormComponent,
    EnderecoFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReservaIngressoRouting,
  ]
})
export class ReservaIngressoModule { }
