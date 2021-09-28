import { FormGroup } from "@angular/forms";

export function PasswordValidator(
  controlName: string,
  matchingControlName: string,
  currentControlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    const currentControl = formGroup.controls[currentControlName];
    if (control.errors && !control.errors.PasswordValidator) {
      return;
    }
    if (control.value === currentControl.value) {
      control.setErrors({ PasswordValidator: true });
    } else {
      control.setErrors(null);
    }
    if (matchingControl.errors && !matchingControl.errors.PasswordValidator) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ PasswordValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

export function ResetPasswordValidator(
  controlName: string,
  matchingControlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.PasswordValidator) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ PasswordValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
