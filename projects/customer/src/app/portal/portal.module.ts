import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { PortalComponent } from "./portal.component";
import { NavigationComponent } from "../navigation/navigation.component";
import { HeaderComponent } from "../header/header.component";

@NgModule({
  declarations: [PortalComponent, NavigationComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: PortalComponent,
        children: [
          {
            path: "",
            redirectTo: "statement"
          },
          {
            path: "statement",
            pathMatch: "full",
            loadChildren: () =>
              import("../statement/statement.module").then(
                m => m.StatementModule
              )
          },
          {
            path: "fund-transfer",
            pathMatch: "full",
            loadChildren: () =>
              import("../fund-transfer/fund-transfer.module").then(
                m => m.FundTransferModule
              )
          },
          {
            path: "profile",
            pathMatch: "full",
            loadChildren: () =>
              import("../profile/profile.module").then(m => m.ProfileModule)
          },
          {
            path: "change-password",
            pathMatch: "full",
            loadChildren: () =>
              import("../password/password.module").then(m => m.PasswordModule)
          },
          {
            path: "change-pin",
            pathMatch: "full",
            loadChildren: () =>
              import("../pin/pin.module").then(m => m.PinModule)
          },
          {
            path: "fund-transfer/confirmation/:transactionId",
            pathMatch: "full",
            loadChildren: () =>
              import("../transfer-summary/transfer-summary.module").then(
                m => m.TransferSummaryModule
              )
          }
        ]
      }
    ])
  ]
})
export class PortalModule {}
