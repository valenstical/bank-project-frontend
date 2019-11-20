import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "ng-valibrary";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Store } from "../services/store";

@Component({
  selector: "app-transfer-summary",
  templateUrl: "./transfer-summary.component.html"
})
export class TransferSummaryComponent extends BaseComponent implements OnInit {
  public formGroup: FormGroup = this.formBuilder.group({
    activationCode: ["", Validators.required]
  });

  public isCanceling = false;

  constructor(private store: Store, private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.store.setHeader("Transaction Summary");
  }

  verifyOTP(): void {}
}
