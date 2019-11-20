import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { PinComponent } from "../pin/pin.component";
import { Store } from "../services/store";

@Component({
  selector: "app-password",
  templateUrl: "./password.component.html"
})
export class PasswordComponent extends PinComponent implements OnInit {
  title = "passowrd";
  constructor(public formBuilder: FormBuilder, public store: Store) {
    super(formBuilder, store);
  }

  ngOnInit() {
    this.store.setHeader("Change Password");
  }
}
