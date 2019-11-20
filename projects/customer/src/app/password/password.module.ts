import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { PasswordComponent } from "./password.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [PasswordComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        component: PasswordComponent
      }
    ])
  ]
})
export class PasswordModule {}
