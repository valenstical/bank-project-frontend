import { Component, OnInit } from "@angular/core";

import { Store } from "../services/store";
import { AuthService } from "ng-valibrary";
import { User } from "../models/user";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html"
})
export class NavigationComponent implements OnInit {
  user: User = this.store.get("user");
  bankName: string = this.store.get("bankName");

  constructor(public store: Store, private authService: AuthService) {}

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }
}
