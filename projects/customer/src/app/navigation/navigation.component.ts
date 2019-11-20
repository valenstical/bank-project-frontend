import { Component, OnInit } from "@angular/core";

import { Store } from "../services/store";
import { AuthService } from "ng-valibrary";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html"
})
export class NavigationComponent implements OnInit {
  constructor(public store: Store, private authService: AuthService) {}

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }
}
