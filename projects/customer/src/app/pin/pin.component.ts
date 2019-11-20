import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy
} from "@angular/core";
import { BaseComponent, HttpService, ResponseData } from "ng-valibrary";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Store } from "../services/store";
import { User } from "../models/user";

@Component({
  selector: "app-pin",
  templateUrl: "./pin.component.html"
})
export class PinComponent extends BaseComponent implements OnInit, OnDestroy {
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
    super();
  }

  ngOnInit(): void {
    this.store.setHeader("Change Pin");
  }

  ngOnDestroy() {
    this.clearSubscription();
  }

  handleSuccess(response: ResponseData) {
    this.hideAlert = false;
    this.showMessage(response.message, "", "success");
    this.toggleLoaders(false);
    this.formGroup.enable();
    this.formGroup.reset();
  }
  saveChanges(): void {
    const pin = this.pinControl.value;
    const confirmPin = this.confirmPinControl.value;
    this.passwordControl.setValue(pin);

    if (pin === confirmPin) {
      this.formGroup.disable();
      this.toggleLoaders(true);

      this.addSubscription(
        this.httpService
          .request(
            `users/${this.title}/${this.user.accountNumber}`,
            this.formGroup.value,
            "patch"
          )
          .subscribe({
            next: (response: ResponseData) => {
              this.handleSuccess(response);
            },
            error: e => {
              this.handleError(e);
              this.formGroup.enable();
            }
          })
      );
    } else {
      this.confirmPinControl.setErrors({ notEqual: true });
    }
  }
}
