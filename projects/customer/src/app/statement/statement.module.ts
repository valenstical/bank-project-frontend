import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { StatementComponent } from "./statement.component";
import { SummaryBoxModule } from "../shared/summary-box/summary-box.module";
import { DropdownTransactionsModule } from "../shared/dropdown-transactions/dropdown-transactions.module";
import { ReceiptModule } from "../receipt/receipt.module";
import { LoaderModule } from "../shared/loader/loader.module";

@NgModule({
  declarations: [StatementComponent],
  imports: [
    CommonModule,
    SummaryBoxModule,
    ReceiptModule,
    LoaderModule,
    DropdownTransactionsModule,
    RouterModule.forChild([
      {
        path: "",
        component: StatementComponent
      }
    ])
  ]
})
export class StatementModule {}
