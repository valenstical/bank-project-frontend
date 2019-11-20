import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PageTransitionComponent } from "./page-transition.component";

@NgModule({
  imports: [CommonModule],
  declarations: [PageTransitionComponent],
  exports: [PageTransitionComponent]
})
export class PageTransitionModule {}
