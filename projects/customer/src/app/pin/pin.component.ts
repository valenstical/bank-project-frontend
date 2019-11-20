import { Component, Input, OnInit } from "@angular/core";
import { BaseComponent } from "ng-valibrary";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Store } from "../services/store";

@Component({
  selector: "app-pin",
  templateUrl: "./pin.component.html"
})
export class PinComponent extends BaseComponent implements OnInit {
  public title = "pin";

  public formGroup: FormGroup = this.formBuilder.group({
    pin: ["", Validators.required],
    confirmPin: ["", Validators.required],
    password: [""]
  });

  pinControl = this.formGroup.get("pin");
  confirmPinControl = this.formGroup.get("confirmPin");
  passwordControl = this.formGroup.get("password");

  constructor(public formBuilder: FormBuilder, public store: Store) {
    super();
  }

  ngOnInit(): void {
    this.store.setHeader("Change Pin");
  }
  saveChanges(): void {
    const pin = this.pinControl.value;
    const confirmPin = this.confirmPinControl.value;
    this.passwordControl.setValue(pin);

    if (pin === confirmPin) {
    } else {
      this.confirmPinControl.setErrors({ notEqual: true });
    }
  }
}
