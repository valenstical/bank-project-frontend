import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FundTransferComponent } from "./fund-transfer.component";
import { SharedModule } from "../shared/shared.module";
import { InputModule } from "ng-valibrary";

@NgModule({
  declarations: [FundTransferComponent],
  imports: [
    CommonModule,
    SharedModule,
    InputModule,
    RouterModule.forChild([
      {
        path: "",
        component: FundTransferComponent
      }
    ])
  ]
})
export class FundTransferModule {}
