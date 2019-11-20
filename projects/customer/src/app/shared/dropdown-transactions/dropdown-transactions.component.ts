import { Component, Output, EventEmitter } from "@angular/core";
import { Dropdown, Pair } from "ng-valibrary";

import { TRANSACTION } from "../../utils/constants";

@Component({
  selector: "app-dropdown-transactions",
  templateUrl: "./dropdown-transactions.component.html"
})
export class DropdownTransactionsComponent extends Dropdown {
  @Output() selected: EventEmitter<string> = new EventEmitter();

  public types = TRANSACTION.TYPE;
  public defaultType: Pair = { value: "", text: "All" };
  public title = this.defaultType.text;

  constructor() {
    super();
  }

  addSuffix(value: string): string {
    return value === "" ? "" : "s";
  }

  handleItemSelection(item: Pair): void {
    if (this.title !== item.text) {
      this.selected.emit(item.value);
    }

    this.title = `${item.text}${this.addSuffix(item.value)}`;
    this.setDropdownState(false);
  }
}
