import { Component, Input } from "@angular/core";
import { Store } from "../../services/store";

@Component({
  selector: "app-summary-box",
  templateUrl: "./summary-box.component.html"
})
export class SummaryBoxComponent {
  @Input() amount: number;
  @Input() transactions = 0;
  @Input() type: string;

  constructor(public store: Store) {}

  isDebit(): boolean {
    return this.type === "debit";
  }

  getTitle(): string {
    return this.isDebit() ? "Debits" : "Credits";
  }
}
