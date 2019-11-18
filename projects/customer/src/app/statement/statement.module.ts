import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { StatementComponent } from "./statement.component";

@NgModule({
  declarations: [StatementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: StatementComponent
      }
    ])
  ]
})
export class StatementModule {}
