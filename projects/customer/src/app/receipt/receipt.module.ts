import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReceiptComponent } from "./receipt.component";

@NgModule({
  declarations: [ReceiptComponent],
  imports: [CommonModule],
  exports: [ReceiptComponent]
})
export class ReceiptModule {}
