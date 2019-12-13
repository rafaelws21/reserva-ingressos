import { ValidatorFn, AbstractControl } from '@angular/forms';

export class FormValidators {

    static requiredIf(checkFn: (ctrl: AbstractControl) => boolean): ValidatorFn {
        function validator(ctrl: AbstractControl): { [requiredIf: string]: boolean } | null {
            if (checkFn(ctrl)) {
                if (!!ctrl.value) {
                    return null;
                }
                return { requiredIf: true };
            }
            return null;
        }
        return validator;
    }
}

