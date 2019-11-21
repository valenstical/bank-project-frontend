import { Component, OnInit } from "@angular/core";
import { BaseComponent, HttpService } from "ng-valibrary";

import { AccountSummary } from "../models/summary";
import { Store } from "../services/store";
import { Transaction } from "../models/transaction";
import { User } from "../models/user";
import { getReceiverInfo } from "../utils/helpers";
import { TRANSACTION } from "../utils/constants";

@Component({
  selector: "app-statement",
  templateUrl: "./statement.component.html"
})
export class StatementComponent extends BaseComponent implements OnInit {
  balance: AccountSummary = {
    total: 0,
    count: 0
  };
  credits: AccountSummary = {
    total: 0,
    count: 0
  };
  debits: AccountSummary = {
    total: 0,
    count: 0
  };

  selectedTransaction: Transaction;
  user: User = this.store.get("user");

  transactions: Transaction[] = [];

  constructor(public store: Store, private httpService: HttpService) {
    super();
  }

  ngOnInit() {
    this.store.setHeader("Account Statement");
    this.fetchTransaction();
  }

  formatTransaction(transaction: Transaction): string {
    const type = transaction.type ? "Credit" : "Debit";
    const verb = transaction.type ? "from" : "to";
    const receiver = getReceiverInfo(this.user, this.store, transaction);
    return `${type} transfer ${verb} ${receiver.name}/${receiver.account}`;
  }

  calculateSummary(): void {
    this.balance.count = this.transactions.length;
    this.transactions.forEach(item => {
      if (item.type === TRANSACTION.TYPE_CREDIT) {
        this.credits.count++;
        this.credits.total += item.amount;
      } else {
        this.debits.count++;
        this.debits.total += item.amount;
      }
    });
    this.balance.total = this.credits.total - this.debits.total;
  }

  fetchTransaction(): void {
    this.isBusy = true;
    this.addSubscription(
      this.httpService.get("transactions", { status: 1 }).subscribe({
        next: response => {
          const { result } = response.data;
          this.isBusy = false;
          this.transactions = result;
          this.calculateSummary();
        }
      })
    );
  }

  showReceipt(transaction: Transaction): void {
    this.selectedTransaction = transaction;
    this.store.toggleMenu("receipt");
  }
}
