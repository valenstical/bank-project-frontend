import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Pair, HttpService, ResponseData } from "ng-valibrary";

import { Store } from "../services/store";
import { User } from "../models/user";
import { RequestComponent } from "../utils/request-component";
import { TransactionService } from "../services/transaction.service";

@Component({
  selector: "app-fund-transfer",
  templateUrl: "./fund-transfer.component.html"
})
export class FundTransferComponent extends RequestComponent
  implements OnInit, OnDestroy {
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

  public banks = [];
  public loadingBanks = true;

  public balance: number;
  public user: User;

  constructor(
    public store: Store,
    private formBuilder: FormBuilder,
    public httpService: HttpService,
    private transactionService: TransactionService
  ) {
    super(httpService);
  }

  ngOnInit() {
    this.balance = this.store.get("summary").balance.total;
    this.user = this.store.get("user");
    this.store.setHeader("Fund Transfer");

    this.fetchBanks();
  }

  fetchBanks(): void {
    this.addSubscription(
      this.transactionService.getBanks().subscribe({
        next: (response: ResponseData) => {
          this.banks = response.data;
          this.loadingBanks = false;
        }
      })
    );
  }

  ngOnDestroy() {
    this.clearSubscription();
  }

  continue(): void {}
}
