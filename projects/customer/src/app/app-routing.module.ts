import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginGuard, AuthGuard } from "ng-valibrary";

import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    pathMatch: "full",
    canActivate: [LoginGuard]
  },
  {
    path: "register",
    pathMatch: "full",
    loadChildren: () =>
      import("./register/register.module").then(m => m.RegisterModule)
  },
  {
    path: "portal",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./portal/portal.module").then(m => m.PortalModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "reload",
      scrollPositionRestoration: "top",
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
