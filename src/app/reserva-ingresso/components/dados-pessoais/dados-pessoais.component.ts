import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]

})
export class DadosPessoaisComponent implements OnInit {

  formGroup: FormGroup;
  saving: boolean;
 
  @Output() valor: EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      nome: ['', [Validators.required]],
      ultimoNome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]]
    });

    this.formGroup.valueChanges.subscribe((valor) => {
      if(this.formGroup.invalid){
        this.valor.emit(null);
      }else{
        this.valor.emit(valor);
      }
    })
  }

  hasValue(controlName: string) {
    let isTrue = false;
    if(this.formGroup.get(controlName).value !== ''){
      isTrue = true
      return isTrue;
    }
    return isTrue;
  }

  get f() { return this.formGroup.controls; }


}
