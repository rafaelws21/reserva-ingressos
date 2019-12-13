import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
    { path: '', component: FormComponent, },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
})


export class ReservaIngressoRouting { }
