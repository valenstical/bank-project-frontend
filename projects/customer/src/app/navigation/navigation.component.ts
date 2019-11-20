import { Component, OnInit } from "@angular/core";

import { Store } from "../services/store";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html"
})
export class NavigationComponent implements OnInit {
  constructor(public store: Store) {}

  ngOnInit() {}

  logout() {}
}
