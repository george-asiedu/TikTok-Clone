import { Component, forwardRef, Input, signal } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  AbstractControl,
  ValidationErrors,
  Validator,
  ControlValueAccessor
} from '@angular/forms';
import { IMAGES } from '../../../constants';

@Component({
  selector: 'app-password-input',
  imports: [],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true
    }
  ]
})
export class PasswordInputComponent implements ControlValueAccessor, Validator  {
  @Input({required: true}) label: string = '';
  public showPassword = signal<boolean>(false);
  public eyeOpenIcon = IMAGES.eyeOpenImage
  public eyeCloseIcon = IMAGES.eyeCloseImage

  public onChange = (value: string) => { };
  public onTouched = () => { };

  public writeValue(value: string): void {
    this.label = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  public validate(control: AbstractControl): ValidationErrors | null {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const isValid = passwordPattern.test(control.value);
    return isValid ? null : { weakPassword: true };
  }

  public onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.label = inputElement.value;
      this.onChange(this.label);
      this.onTouched();
    }
  }
  public togglePasswordVisibility() {
    this.showPassword.update((prev) => !prev);
  }
}
