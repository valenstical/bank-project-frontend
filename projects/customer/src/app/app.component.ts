import { Component, OnInit } from "@angular/core";
import { HttpService, AuthService } from "ng-valibrary";

import { environment } from "../environments/environment";
import { Store } from "./services/store";

@Component({
  selector: "app-root",
  template:
    "<router-outlet></router-outlet> <lib-page-transition></lib-page-transition>"
})
export class AppComponent implements OnInit {
  constructor(private store: Store, private authService: AuthService) {
    HttpService.BASE_URL = environment.API_URL;
    HttpService.LOGIN_PATH = "";
    HttpService.STORAGE_TYPE = HttpService.STORAGE.SESSION;
    HttpService.MAIN_PATH = "/portal/statement";
  }

  ngOnInit() {
    this.store.set("user", this.authService.getAuthenticatedUser());
  }
}
