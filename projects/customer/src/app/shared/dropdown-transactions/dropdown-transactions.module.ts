import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DropdownTransactionsComponent } from "./dropdown-transactions.component";

@NgModule({
  declarations: [DropdownTransactionsComponent],
  imports: [CommonModule],
  exports: [DropdownTransactionsComponent]
})
export class DropdownTransactionsModule {}
