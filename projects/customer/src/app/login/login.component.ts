import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "ng-valibrary";
import { Store } from "../services/store";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html"
})
export class LoginComponent extends BaseComponent implements OnInit {
  public formGroup: FormGroup = this.formBuilder.group({
    accountNumber: ["", Validators.required],
    password: ["", Validators.required]
  });

  public bankName = this.store.get("bankName");

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private titleService: Title
  ) {
    super();
    titleService.setTitle(`${store.get("bankName")}|Customer Login`);
  }

  ngOnInit() {}

  login(): void {}
}
