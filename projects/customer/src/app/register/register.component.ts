import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { HttpService, ResponseData } from "ng-valibrary";
import { Title } from "@angular/platform-browser";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Store } from "../services/store";
import { User } from "../models/user";
import {
  IDENTIFICATION_TYPES,
  GENDERS,
  STATES,
  ACCOUNT_TYPES,
  DEFAULT_IMAGE_URL
} from "../utils/constants";
import { RequestComponent } from "../utils/request-component";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html"
})
export class RegisterComponent extends RequestComponent implements OnInit {
  @ViewChild("topElement", { static: false }) topElement: ElementRef;

  public user: User = this.store.get("user");
  public bankName = this.store.get("bankName");

  public formGroup: FormGroup = this.formBuilder.group({
    firstname: ["", Validators.required],
    lastname: ["", Validators.required],
    dob: ["", Validators.required],
    gender: ["", Validators.required],
    email: ["", Validators.required],
    phone: ["", Validators.required],
    identificationType: ["", Validators.required],
    identificationNumber: ["", Validators.required],
    address: ["", Validators.required],
    city: ["", Validators.required],
    stateId: ["", Validators.required],
    zip: [""],
    password: ["", Validators.required],
    confirmPassword: ["", Validators.required],
    pin: ["", Validators.required],
    confirmPin: ["", Validators.required],
    accountType: ["", Validators.required],
    image: [DEFAULT_IMAGE_URL, Validators.required]
  });

  public states = STATES;
  public identificationTypes = IDENTIFICATION_TYPES;
  public genders = GENDERS;
  public accountTypes = ACCOUNT_TYPES;

  constructor(
    private store: Store,
    private titleService: Title,
    private formBuilder: FormBuilder,
    public httpService: HttpService
  ) {
    super(httpService);
    titleService.setTitle(
      `${store.get("bankName")}|Online Acccount Registration`
    );
  }

  ngOnInit() {}

  handleSuccess(response: ResponseData): void {
    super.handleSuccess(response);
    this.showMessage(response.message, "Registration Successful!", "success");
    this.formGroup.reset();
    this.formGroup.controls.image.setValue(DEFAULT_IMAGE_URL);
  }

  registerAccount(): void {
    const pin = this.formGroup.get("pin").value;
    const confirmPin = this.formGroup.get("confirmPin").value;
    const password = this.formGroup.get("password").value;
    const confirmPassword = this.formGroup.get("confirmPassword").value;

    if (pin !== confirmPin) {
      return this.formGroup.get("confirmPin").setErrors({ notEqual: true });
    }

    if (password !== confirmPassword) {
      return this.formGroup
        .get("confirmPassword")
        .setErrors({ notEqual: true });
    }

    this.makeRequest(`users`, "post");
  }
}
