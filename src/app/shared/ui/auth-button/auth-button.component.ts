import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';
import {ButtonStyles} from '../../../constants';

@Component({
  selector: 'app-auth-button',
  imports: [NgClass, SpinnerComponent],
  templateUrl: './auth-button.component.html',
  styleUrl: './auth-button.component.scss'
})
export class AuthButtonComponent {
  private static readonly DISABLED_STYLES = 'bg-secondary cursor-not-allowed';
  private static readonly ENABLED_STYLES = 'bg-tikPink hover:bg-buttonHover cursor-pointer';

  public label = input('');
  public loading = input(false);
  public disabled = input(false);
  public type = input('submit');
  public clicked = output<void>();

  public get isDisabled(): boolean {
    return this.disabled() || this.loading();
  }

  public getButtonStyles(): ButtonStyles {
    return {
      [AuthButtonComponent.DISABLED_STYLES]: this.isDisabled,
      [AuthButtonComponent.ENABLED_STYLES]: !this.isDisabled
    };
  }


  public onClick() {
    if (!this.isDisabled) {
      this.clicked.emit();
    }
  }
}
