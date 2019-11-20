import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { RegisterComponent } from "./register.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        component: RegisterComponent
      }
    ])
  ]
})
export class RegisterModule {}
