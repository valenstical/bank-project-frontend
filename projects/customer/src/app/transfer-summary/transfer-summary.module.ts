import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { TransferSummaryComponent } from "./transfer-summary.component";

@NgModule({
  declarations: [TransferSummaryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: TransferSummaryComponent
      }
    ])
  ]
})
export class TransferSummaryModule {}
