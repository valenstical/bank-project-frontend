import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { PinComponent } from "./pin.component";

@NgModule({
  declarations: [PinComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: PinComponent
      }
    ])
  ]
})
export class PinModule {}
