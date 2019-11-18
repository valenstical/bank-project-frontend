import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "register",
    pathMatch: "full",
    loadChildren: () =>
      import("./register/register.module").then(m => m.RegisterModule)
  },
  {
    path: "portal",
    loadChildren: () =>
      import("./portal/portal.module").then(m => m.PortalModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
