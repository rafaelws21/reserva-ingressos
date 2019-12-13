import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './pages/form/form.component';
import { EnderecoFormComponent } from './components/endereco-form/endereco-form.component';

@NgModule({
  declarations: [
    FormComponent,
    EnderecoFormComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ReservaIngressoModule { }
