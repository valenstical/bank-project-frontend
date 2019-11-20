import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { PinComponent } from "./pin.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [PinComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        component: PinComponent
      }
    ])
  ]
})
export class PinModule {}
