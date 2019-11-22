import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpService, ResponseData, AuthService } from "ng-valibrary";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Store } from "../services/store";
import { User } from "../models/user";
import { IDENTIFICATION_TYPES, GENDERS, STATES } from "../utils/constants";
import { RequestComponent } from "../utils/request-component";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html"
})
export class ProfileComponent extends RequestComponent
  implements OnInit, OnDestroy {
  public user: User = this.authService.getAuthenticatedUser();

  public formGroup: FormGroup = this.formBuilder.group({
    firstname: [this.user.firstname, Validators.required],
    lastname: [this.user.lastname, Validators.required],
    dob: [formatDate(this.user.dob, "yyyy-MM-dd", "en"), Validators.required],
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
  public uploadingImage = false;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    public httpService: HttpService,
    private authService: AuthService
  ) {
    super(httpService);
  }

  ngOnInit() {
    this.store.setHeader("My Profile");
  }

  ngOnDestroy() {
    this.clearSubscription();
  }

  handleSuccess(response: ResponseData): void {
    super.handleSuccess(response);
    const edits = this.formGroup.value;
    this.store.get("user").firstname = edits.firstname;
    this.store.get("user").lastname = edits.lastname;
    this.syncData(edits);
  }

  syncData(data: any): void {
    const user = this.authService.getAuthenticatedUser();
    this.authService.setAuthenticatedUser({ ...user, ...data } as any);
  }

  updateProfileImage(url: string): void {
    this.uploadingImage = true;
    this.addSubscription(
      this.httpService
        .request(
          `users/image/${this.user.accountNumber}`,
          { image: url },
          "patch"
        )
        .subscribe({
          next: () => {
            this.store.get("user").image = url;
            this.syncData({ image: url });
            this.user.image = url;
            this.uploadingImage = false;
          },
          error: () => {
            this.uploadingImage = false;
          }
        })
    );
  }

  editProfile() {
    this.makeRequest(`users/profile/${this.user.accountNumber}`, "patch");
  }
}
