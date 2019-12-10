import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared/shared.module";
import { LoaderModule } from "../shared/loader/loader.module";
import { RequestATMComponent } from "./request-atm";

@NgModule({
  declarations: [RequestATMComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoaderModule,
    RouterModule.forChild([
      {
        path: "",
        component: RequestATMComponent
      }
    ])
  ]
})
export class RequestATMModule {}
