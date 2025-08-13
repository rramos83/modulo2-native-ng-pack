import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMinlen]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: MinlenDirective, multi: true }
  ]
})
export class MinlenDirective implements Validator {
  @Input('appMinlen') min = 3;

  validate(control: AbstractControl): ValidationErrors | null {
    const val = (control.value || '').toString();
    if (val.length === 0) { return null; } // deja que "required" falle si corresponde
    return val.length < +this.min ? { minlen: true } : null;
  }
}
