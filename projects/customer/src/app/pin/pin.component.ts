import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy
} from "@angular/core";
import { HttpService, ResponseData } from "ng-valibrary";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Store } from "../services/store";
import { User } from "../models/user";
import { RequestComponent } from "../utils/request-component";

@Component({
  selector: "app-pin",
  templateUrl: "./pin.component.html"
})
export class PinComponent extends RequestComponent
  implements OnInit, OnDestroy {
  @ViewChild("topElement", { static: false }) topElement: ElementRef;

  public title = "pin";
  private user: User = this.store.get("user");

  public formGroup: FormGroup = this.formBuilder.group({
    pin: ["", Validators.required],
    confirmPin: ["", Validators.required],
    password: [""]
  });

  pinControl = this.formGroup.get("pin");
  confirmPinControl = this.formGroup.get("confirmPin");
  passwordControl = this.formGroup.get("password");

  constructor(
    public formBuilder: FormBuilder,
    public store: Store,
    public httpService: HttpService
  ) {
    super(httpService);
  }

  ngOnInit(): void {
    this.store.setHeader("Change Pin");
  }

  ngOnDestroy() {
    this.clearSubscription();
  }

  handleSuccess(response: ResponseData) {
    super.handleSuccess(response);
    this.formGroup.reset();
  }
  saveChanges(): void {
    const pin = this.pinControl.value;
    const confirmPin = this.confirmPinControl.value;
    this.passwordControl.setValue(pin);

    if (pin === confirmPin) {
      this.formGroup.disable();
      this.toggleLoaders(true);

      this.makeRequest(
        `users/${this.title}/${this.user.accountNumber}`,
        "patch"
      );
    } else {
      this.confirmPinControl.setErrors({ notEqual: true });
    }
  }
}
