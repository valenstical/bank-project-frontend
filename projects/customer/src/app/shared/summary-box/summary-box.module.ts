import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SummaryBoxComponent } from "./summary-box.component";

@NgModule({
  declarations: [SummaryBoxComponent],
  imports: [CommonModule, RouterModule],
  exports: [SummaryBoxComponent]
})
export class SummaryBoxModule {}
