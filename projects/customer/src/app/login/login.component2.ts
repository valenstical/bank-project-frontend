// import {
//   Component,
//   OnInit,
//   OnDestroy,
//   ViewChild,
//   ElementRef
// } from "@angular/core";
// import { FormBuilder, FormGroup, Validators } from "@angular/forms";
// import { BaseComponent, AuthService } from "ng-valibrary";
// import { Title } from "@angular/platform-browser";
// import { Router } from "@angular/router";

// import { Store } from "../services/store";

// @Component({
//   selector: "app-login",
//   templateUrl: "./login.component.html"
// })
// export class LoginComponent extends BaseComponent implements OnInit, OnDestroy {
//   public formGroup: FormGroup = this.formBuilder.group({
//     accountNumber: ["", Validators.required],
//     password: ["", Validators.required]
//   });

//   public bankName = this.store.get("bankName");
//   private portalUrl = "portal/statement";

//   constructor(
//     private formBuilder: FormBuilder,
//     private store: Store,
//     private titleService: Title,
//     private authService: AuthService,
//     private router: Router
//   ) {
//     super();
//   }

//   ngOnInit() {
//     this.titleService.setTitle(`${this.store.get("bankName")}|Customer Login`);
//   }

//   ngOnDestroy(): void {
//     this.clearSubscription();
//   }

//   handleLogin() {
//     this.toggleLoaders(true);
//     this.formGroup.disable();
//     this.addSubscription(
//       this.authService.login(this.formGroup.value, "users/login").subscribe(
//         response => {
//           const { data } = response;
//           this.hideAlert = false;
//           this.showMessage(
//             "Redirecting you...",
//             "Log in successful",
//             "success"
//           );
//           this.authService.setAuthenticatedUser(data);
//           this.store.set("user", this.authService.getAuthenticatedUser());
//           this.router.navigateByUrl(this.portalUrl);
//         },
//         error => {
//           this.handleError(error);
//           this.formGroup.enable();
//         }
//       )
//     );
//   }
// }
