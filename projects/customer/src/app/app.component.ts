import { Component } from "@angular/core";
import { HttpService } from "ng-valibrary";

import { environment } from "../environments/environment";

@Component({
  selector: "app-root",
  template:
    "<router-outlet></router-outlet> <lib-page-transition></lib-page-transition>"
})
export class AppComponent {
  constructor() {
    HttpService.BASE_URL = environment.API_URL;
    HttpService.LOGIN_PATH = "";
    HttpService.STORAGE_TYPE = HttpService.STORAGE.SESSION;
    HttpService.MAIN_PATH = "/portal/statement";
  }
}
