import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-auth-button',
  imports: [NgClass, SpinnerComponent],
  templateUrl: './auth-button.component.html',
  styleUrl: './auth-button.component.scss'
})
export class AuthButtonComponent {
  label = input('');
  loading = input(false);
  disabled = input(false);
  type = input('submit');
  clicked = output<void>();

  get isDisabled(): boolean {
    return this.disabled() || this.loading();
  }

  onClick() {
    if (!this.isDisabled) {
      this.clicked.emit();
    }
  }
}
