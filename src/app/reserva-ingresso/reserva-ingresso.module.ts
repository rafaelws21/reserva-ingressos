import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { FormComponent } from './pages/form/form.component';
import { EnderecoFormComponent } from './components/endereco-form/endereco-form.component';
import { ReservaIngressoRouting } from './reserva-ingresso-routing.module';
import { DadosPessoaisComponent } from './components/dados-pessoais/dados-pessoais.component';
import { MovieService } from './services/movie.service';
import { CepService } from './services/cep.service';
import { ReservaIngressoService } from './services/reserva-ingresso.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FormComponent,
    EnderecoFormComponent,
    DadosPessoaisComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReservaIngressoRouting,
    NgxMaskModule.forChild({ dropSpecialCharacters: true }),
    HttpClientModule,
  ],
  providers:[
    MovieService,
    CepService,
    ReservaIngressoService,
  ]
})
export class ReservaIngressoModule { }
