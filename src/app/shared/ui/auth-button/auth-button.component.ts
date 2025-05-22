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
  public label = input('');
  public loading = input(false);
  public disabled = input(false);
  public type = input('submit');
  public clicked = output<void>();

  public get isDisabled(): boolean {
    return this.disabled() || this.loading();
  }

  public onClick() {
    if (!this.isDisabled) {
      this.clicked.emit();
    }
  }
}
