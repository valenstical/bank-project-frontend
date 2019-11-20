import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { BaseComponent } from "ng-valibrary";

import { Store } from "../services/store";

@Component({
  selector: "app-portal",
  templateUrl: "./portal.component.html"
})
export class PortalComponent extends BaseComponent
  implements OnInit, OnDestroy {
  constructor(public store: Store, private router: Router) {
    super();
  }

  ngOnInit() {
    this.addSubscription(
      this.router.events.subscribe({
        next: () => {
          this.store.hideMenus();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.clearSubscription();
  }
}
