import { FormGroup } from "@angular/forms";

export function RangeValidator(
  controlName: string,
  matchingControlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.RangeValidator) {
      return;
    }
    if (control.value >= matchingControl.value) {
      matchingControl.setErrors({ RangeValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
