import { Component, OnInit, Input } from "@angular/core";

import { Transaction } from "../models/transaction";
import { Store } from "../services/store";

@Component({
  selector: "app-receipt",
  templateUrl: "./receipt.component.html"
})
export class ReceiptComponent implements OnInit {
  @Input() transaction: Transaction;

  constructor(public store: Store) {}
  ngOnInit() {}
}
