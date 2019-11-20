import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "ng-valibrary";
import { Title } from "@angular/platform-browser";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Store } from "../services/store";
import { User } from "../models/user";
import {
  IDENTIFICATION_TYPES,
  GENDERS,
  STATES,
  ACCOUNT_TYPES
} from "../utils/constants";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html"
})
export class RegisterComponent extends BaseComponent implements OnInit {
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
    accountType: ["", Validators.required]
  });

  public states = STATES;
  public identificationTypes = IDENTIFICATION_TYPES;
  public genders = GENDERS;
  public accountTypes = ACCOUNT_TYPES;

  constructor(
    private store: Store,
    private titleService: Title,
    private formBuilder: FormBuilder
  ) {
    super();
    titleService.setTitle(
      `${store.get("bankName")}|Online Acccount Registration`
    );
  }

  ngOnInit() {}
}
