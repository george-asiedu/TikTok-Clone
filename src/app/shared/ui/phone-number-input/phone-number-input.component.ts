import { Component, input, output } from "@angular/core";
import { countries } from "../../../constants";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-phone-number-input",
  imports: [FormsModule],
  templateUrl: "./phone-number-input.component.html",
  styleUrl: "./phone-number-input.component.scss",
})
export class PhoneNumberInputComponent {
  public selectedCountryCode = input("+233");
  public phoneNumber = input("");
  public phoneChange = output<string>();
  public countryChange = output<string>();

  public countries = countries;

  public onCountryChange(code: string) {
    this.countryChange.emit(code);
  }

  public onPhoneInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.phoneChange.emit(inputElement.value);
    }
  }
}
