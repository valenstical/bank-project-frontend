import { Component, OnInit, OnDestroy } from "@angular/core";
import { BaseComponent } from "ng-valibrary";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

import { Store } from "../services/store";
import { delay } from "rxjs/operators";

@Component({
  selector: "app-request-atm",
  templateUrl: "./request-atm.html"
})
export class RequestATMComponent extends BaseComponent
  implements OnInit, OnDestroy {
  isSuccess = false;
  request$ = new Subject();

  constructor(public store: Store, public router: Router) {
    super();
  }

  ngOnInit() {
    this.store.setHeader("Request ATM");
    this.addSubscription(
      this.request$.pipe(delay(2000)).subscribe({
        next: () => {
          this.isSuccess = true;
          this.isBusy = false;
        }
      })
    );
  }

  ngOnDestroy() {
    this.clearSubscription();
  }

  requestATM(): void {
    this.isBusy = true;
    this.request$.next(null);
  }
}
