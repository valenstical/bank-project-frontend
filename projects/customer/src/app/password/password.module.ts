import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { PasswordComponent } from "./password.component";

@NgModule({
  declarations: [PasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: PasswordComponent
      }
    ])
  ]
})
export class PasswordModule {}
