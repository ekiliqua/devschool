// import { Directive, Input } from "@angular/core";

// import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms";

// import { forbiddenNameValidator } from "./forbidden-name-validator";

// @Directive({
//     selector: '[appForbiddenName]',
//     providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true }]
// })
// export class ForbiddenValidatorDirective implements Validator {
//     @Input('appForbiddenName') forbiddenName: string;

//     validate(control: AbstractControl): { [key: string]: any } {
//         return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
//             : null;

//     }
// }
