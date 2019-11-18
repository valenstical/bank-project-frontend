import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { ReceiptComponent } from "./receipt.component";

@NgModule({
  declarations: [ReceiptComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: ReceiptComponent
      }
    ])
  ]
})
export class ReceiptModule {}
