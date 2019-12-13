import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formGroup: FormGroup;
  saving: boolean;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      categoria: [null, [Validators.required]],
      produto: [null, [Validators.required]],
      tipoControlado: [null, [Validators.required]]
    });
  }

}
