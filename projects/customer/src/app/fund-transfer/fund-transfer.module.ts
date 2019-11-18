import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FundTransferComponent } from "./fund-transfer.component";

@NgModule({
  declarations: [FundTransferComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: FundTransferComponent
      }
    ])
  ]
})
export class FundTransferModule {}
