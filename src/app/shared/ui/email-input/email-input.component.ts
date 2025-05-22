import { Component, forwardRef, Input } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  AbstractControl,
  ValidationErrors,
  Validator,
  ControlValueAccessor
} from '@angular/forms';

@Component({
  selector: 'app-email-input',
  imports: [],
  templateUrl: './email-input.component.html',
  styleUrl: './email-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailInputComponent),
      multi: true
    }
  ]
})
export class EmailInputComponent implements ControlValueAccessor, Validator {
  @Input({required: true}) label: string = '';
  public onChange = (value: string) => {};
  public onTouched = () => {};

  public writeValue(value: string): void {
    this.label = value;
  }
  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  public validate(control: AbstractControl): ValidationErrors | null {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(control.value);
    return isValid ? null : { invalidEmail: true };
  }
  public onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.label = inputElement.value;
      this.onChange(this.label);
      this.onTouched();
    }
  }
}
