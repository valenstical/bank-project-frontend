import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "ng-valibrary";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Store } from "../services/store";
import { User } from "../models/user";
import { IDENTIFICATION_TYPES, GENDERS, STATES } from "../utils/constants";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html"
})
export class ProfileComponent extends BaseComponent implements OnInit {
  public user: User = this.store.get("user");

  public formGroup: FormGroup = this.formBuilder.group({
    firstname: [this.user.firstname, Validators.required],
    lastname: [this.user.lastname, Validators.required],
    dob: [this.user.dob, Validators.required],
    gender: [this.user.gender, Validators.required],
    email: [this.user.email, Validators.required],
    phone: [this.user.phone, Validators.required],
    identificationType: [this.user.identificationType, Validators.required],
    identificationNumber: [this.user.identificationNumber, Validators.required],
    address: [this.user.address, Validators.required],
    city: [this.user.city, Validators.required],
    stateId: [this.user.stateId, Validators.required],
    zip: [this.user.zip]
  });

  public states = STATES;
  public identificationTypes = IDENTIFICATION_TYPES;
  public genders = GENDERS;

  constructor(private store: Store, private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.store.setHeader("My Profile");
  }
}
