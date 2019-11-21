import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpService, ResponseData } from "ng-valibrary";

import { Store } from "../services/store";
import { User } from "../models/user";
import { RequestComponent } from "../utils/request-component";
import { TransactionService } from "../services/transaction.service";
import { Router } from "@angular/router";

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
    transactionDate: ["", Validators.required],
    ifscCode: [""],
    pin: ["", Validators.required]
  });

  public banks = [];
  public loadingBanks = true;

  public balance: number;
  public user: User;
  public pendingTransactionId: number;

  constructor(
    public store: Store,
    private formBuilder: FormBuilder,
    public httpService: HttpService,
    private transactionService: TransactionService,
    private router: Router
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

  handleSuccess(response: ResponseData): void {
    super.handleSuccess(response);
    console.log(response);
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
    this.makeRequest(`transactions/${this.user.accountNumber}`, "post");
  }
}
