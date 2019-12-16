import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReservaIngressoService } from '../../services/reserva-ingresso.service';
import { FormValidators } from 'src/app/shared/validators/form.validators';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  isRequired: any;
  checkedAcompanhante: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private reservaIngressoService: ReservaIngressoService,
    private movieService: MovieService,
  ) {}

  ngOnInit() {
    this.isRequired = () => this.checkedAcompanhante;
    this.formGroup = this.formBuilder.group({
      dadosPessoais: [null, [Validators.required]],
      acompanhante: [null, [FormValidators.requiredIf(this.isRequired)]],
      cep: [null, [Validators.required]]
    });

    this.movieService.getMovieUpcoming().subscribe((movies)=>console.log(movies));

  }

  getDadosPessoais(valor: any) {
    this.formGroup.get('dadosPessoais').setValue(valor);
  }

  getAconpanhante(valor: any) {
    this.formGroup.get('acompanhante').setValue(valor);
  }

  getCep(valor: any) {
    this.formGroup.get('cep').setValue(valor);
  }

  enviarForm(event: Event) {
    event.preventDefault();
    if (this.formGroup.invalid) {
      return;
    }
    this.reservaIngressoService.enviarIngresso(this.formGroup.value).subscribe(
      value => {
        console.log('Sucesso', value);
      },
      error => {
        console.error('Erro !!!', error);
      }
    );
  }

  checandoAcompanhante(event: any) {
    this.checkedAcompanhante = event.target.checked;
  }
}
