import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy
} from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { HttpService } from "ng-valibrary";

import { PinComponent } from "../pin/pin.component";
import { Store } from "../services/store";

@Component({
  selector: "app-password",
  templateUrl: "./password.component.html"
})
export class PasswordComponent extends PinComponent
  implements OnInit, OnDestroy {
  @ViewChild("topElement", { static: false }) topElement: ElementRef;

  title = "password";

  constructor(
    public formBuilder: FormBuilder,
    public store: Store,
    public httpService: HttpService
  ) {
    super(formBuilder, store, httpService);
  }

  ngOnInit() {
    this.store.setHeader("Change Password");
  }

  ngOnDestroy() {
    this.clearSubscription();
  }
}
