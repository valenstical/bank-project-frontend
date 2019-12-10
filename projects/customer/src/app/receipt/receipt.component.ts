import { Component, Input } from "@angular/core";

import { Transaction } from "../models/transaction";
import { Store } from "../services/store";
import { User } from "../models/user";
import { TRANSACTION } from "../utils/constants";

@Component({
  selector: "app-receipt",
  templateUrl: "./receipt.component.html"
})
export class ReceiptComponent {
  @Input() transaction: Transaction;
  @Input() receiver: any;

  public user: User = this.store.get("user");

  constructor(public store: Store) {}

  getOption(type: number): string {
    const option = TRANSACTION.OPTION.find(item => {
      return +item.value === type;
    });
    return option.text;
  }

  printReceipt() {
    print();
  }
}
