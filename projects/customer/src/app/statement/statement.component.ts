import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

import { AccountSummary } from "../models/summary";
import { Store } from "../services/store";
import { Transaction } from "../models/transaction";

@Component({
  selector: "app-statement",
  templateUrl: "./statement.component.html"
})
export class StatementComponent implements OnInit {
  summary: AccountSummary = this.store.get("summary");
  selectedTransaction: Transaction;

  constructor(public store: Store) {}

  ngOnInit() {
    this.store.setHeader("Account Statement");
  }

  showReceipt(transaction: Transaction): void {
    this.selectedTransaction = transaction;
    this.store.toggleMenu("receipt");
  }
}
