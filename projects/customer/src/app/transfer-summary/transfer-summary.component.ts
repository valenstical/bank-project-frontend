import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpService, ResponseData } from "ng-valibrary";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Store } from "../services/store";
import { RequestComponent } from "../utils/request-component";
import { Router, ActivatedRoute } from "@angular/router";
import { Transaction } from "../models/transaction";
import { User } from "../models/user";

@Component({
  selector: "app-transfer-summary",
  templateUrl: "./transfer-summary.component.html"
})
export class TransferSummaryComponent extends RequestComponent
  implements OnInit, OnDestroy {
  public formGroup: FormGroup = this.formBuilder.group({
    activationCode: ["", Validators.required]
  });

  public isCanceling = false;
  public isFetching = true;
  public isSuccess = false;

  public transaction: Transaction;
  public user: User = this.store.get("user");

  constructor(
    public store: Store,
    private formBuilder: FormBuilder,
    public httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    super(httpService);
  }

  ngOnInit() {
    this.store.setHeader("Transaction Summary");
    const {
      params: { transactionId }
    } = this.activatedRoute.snapshot;
    this.fetchTransaction(transactionId);
  }

  ngOnDestroy() {
    this.clearSubscription();
  }

  displayTransaction(data: Transaction): void {
    this.transaction = data;
  }

  fetchTransaction(id: number): void {
    this.addSubscription(
      this.httpService.get("transactions", { id }).subscribe({
        next: response => {
          const { result } = response.data;
          this.isFetching = false;
          if (result.length && result[0].status === 0) {
            return this.displayTransaction(result[0]);
          }
          this.router.navigateByUrl("/portal/statement");
        }
      })
    );
  }

  cancelTransaction(): void {
    this.isCanceling = true;
    this.addSubscription(
      this.httpService
        .request(`transactions/${this.transaction.id}/cancel`, {}, "delete")
        .subscribe({
          next: response => {
            this.router.navigateByUrl("/portal/statement");
          },
          error: e => {
            this.isCanceling = false;
          }
        })
    );
  }

  handleSuccess(data: ResponseData): void {
    super.handleSuccess(data);
    this.isSuccess = true;
    this.response.title = "Transaction Successful!";
    this.response.message = [
      "Your transfer has been successfully processed and beneficiary credited."
    ];
  }

  handleError(e: any): void {
    super.handleError(e);
    this.response.title = "";
  }

  verifyOTP(): void {
    this.makeRequest(`transactions/${this.transaction.id}/verify`, "patch");
  }
}
