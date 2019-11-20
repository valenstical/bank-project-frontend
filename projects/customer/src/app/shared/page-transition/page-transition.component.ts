import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter
} from "@angular/core";
import {
  Router,
  RouterEvent,
  RouteConfigLoadStart,
  RouteConfigLoadEnd
} from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "lib-page-transition",
  templateUrl: "./page-transition.component.html",
  styleUrls: ["./page-transition.component.css"]
})
export class PageTransitionComponent implements OnInit, OnDestroy {
  @Output() activeChange: EventEmitter<boolean> = new EventEmitter();

  loading = false;
  error = false;
  private subscription: Subscription = new Subscription();

  constructor(private router: Router) {}

  ngOnInit() {
    this.subscription.add(
      this.router.events.subscribe({
        next: (event: RouterEvent): void => {
          if (event instanceof RouteConfigLoadStart) {
            this.loading = true;
          } else if (event instanceof RouteConfigLoadEnd) {
            this.loading = false;
          }
        },
        error: () => {
          this.error = true;
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
