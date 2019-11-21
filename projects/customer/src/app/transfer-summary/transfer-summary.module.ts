import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { TransferSummaryComponent } from "./transfer-summary.component";
import { SharedModule } from "../shared/shared.module";
import { LoaderModule } from "../shared/loader/loader.module";

@NgModule({
  declarations: [TransferSummaryComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoaderModule,
    RouterModule.forChild([
      {
        path: "",
        component: TransferSummaryComponent
      }
    ])
  ]
})
export class TransferSummaryModule {}
