import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpService, ResponseData } from "ng-valibrary";
import { Router } from "@angular/router";
import { formatDate } from "@angular/common";

import { Store } from "../services/store";
import { User } from "../models/user";
import { RequestComponent } from "../utils/request-component";
import { TRANSACTION } from "../utils/constants";

@Component({
  selector: "app-fund-transfer",
  templateUrl: "./fund-transfer.component.html"
})
export class FundTransferComponent extends RequestComponent
  implements OnInit, OnDestroy {
  public formGroup: FormGroup = this.formBuilder.group({
    option: ["", Validators.required],
    receiverBank: ["", Validators.required],
    receiverAccount: ["", Validators.required],
    receiverName: ["", Validators.required],
    receiverEmail: ["", Validators.required],
    receiverPhone: ["", Validators.required],
    amount: ["", Validators.required],
    description: [""],
    date: [formatDate(new Date(), "yyyy-MM-dd", "en"), Validators.required],
    transactionDate: [""],
    ifscCode: [""],
    pin: ["", Validators.required]
  });

  public banks = [];
  public loadingBanks = true;
  public options = TRANSACTION.OPTION;

  public user: User;
  public pendingTransactionId: number;

  constructor(
    public store: Store,
    private formBuilder: FormBuilder,
    public httpService: HttpService,
    private router: Router
  ) {
    super(httpService);
  }

  ngOnInit() {
    this.user = this.store.get("user");
    this.store.setHeader("Fund Transfer");
  }

  ngOnDestroy() {
    this.clearSubscription();
  }

  handleSuccess(response: ResponseData): void {
    super.handleSuccess(response);
    this.router.navigateByUrl(
      `portal/fund-transfer/confirmation/${response.data.id}`
    );
  }

  handleError(e: any): void {
    super.handleError(e);
    const { code, data } = e.error;
    if (code === 403) {
      this.pendingTransactionId = data.transactionId;
    }
  }

  processTransaction(): void {
    const dateControl = this.formGroup.controls.date;
    this.formGroup.controls.transactionDate.setValue(
      new Date(dateControl.value).getTime()
    );

    this.makeRequest(`transactions/${this.user.accountNumber}`, "post");
  }
}
