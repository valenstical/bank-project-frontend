import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Pair, BaseComponent } from "ng-valibrary";

import { Store } from "../services/store";
import { User } from "../models/user";

@Component({
  selector: "app-fund-transfer",
  templateUrl: "./fund-transfer.component.html"
})
export class FundTransferComponent extends BaseComponent implements OnInit {
  public formGroup: FormGroup = this.formBuilder.group({
    type: ["", Validators.required],
    bank: ["", Validators.required],
    receiverAccount: ["", Validators.required],
    receiverName: ["", Validators.required],
    amount: ["", Validators.required],
    description: [""],
    transactionDate: ["", Validators.required],
    ifscCode: [""],
    pin: ["", Validators.required]
  });

  public banks: Pair = [] as any;
  public balance: number;
  public user: User;

  constructor(public store: Store, private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.balance = this.store.get("summary").balance.total;
    this.user = this.store.get("user");
    this.store.setHeader("Fund Transfer");
  }

  continue(): void {}
}
