// // tslint:disable

// import {
//   Component,
//   OnInit,
//   OnDestroy,
//   ViewChild,
//   ElementRef
// } from "@angular/core";
// import { FormBuilder, FormGroup, Validators } from "@angular/forms";
// import { BaseComponent, AuthService, HttpService } from "ng-valibrary";
// import { Title } from "@angular/platform-browser";
// import { Router } from "@angular/router";

// import { Store } from "../services/store";
// import { from } from 'rxjs';
// import { concatMap, delay } from "rxjs/operators";


// @Component({
//   selector: "app-login",
//   templateUrl: "./login.component.html"
// })
// export class LoginComponent extends BaseComponent implements OnInit, OnDestroy {
//   HttpService.BASE_URL = 'https://app.luminskin.com/api/products';

//   constructor(
//     private formBuilder: FormBuilder,
//     private store: Store,
//     private titleService: Title,
//     private authService: AuthService,
//     private router: Router,
//     private httpService: HttpService,
//   ) {
//     super();
//   }
//   public formGroup: FormGroup = this.formBuilder.group({
//     accountNumber: ["", Validators.required],
//     password: ["", Validators.required]
//   });

//   public bankName = this.store.get("bankName");
//   private portalUrl = "portal/statement";

//   all_currencies = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BWP", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "ISK", "JMD", "JPY", "KES", "KSG", "KHR", "KMF", "KRW", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "STD", "SVC", "SZL", "THB", "TJS", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "UYU", "UZS", "VND", "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW"];
//   currentCurr = '';
//   products = {};

//   getProducts(currency) {
//     return this.httpService.get('checkout', { currency });
//   }
//   loadProducts() {
//     this.addSubscription(from(this.all_currencies)
//       .pipe(
//         concatMap((param) => {
//           this.currentCurr = param;
//           return this.getProducts(param)
//         })
//       )
//       .subscribe({
//         next: (response: any[]) => {
//           const result = {
//             'Popular Bundles': [],
//             'Individual Items': [],
//             'Accessories': []
//           };
//           response.forEach((product) => {
//             if ([10, 13, 25, 36].indexOf(product.id) >= 0) {
//               result["Popular Bundles"].push({ id: product.id, price: product.price, sub_price: product.sub_price })
//             }
//             else if ([29, 38, 48].indexOf(product.id) >= 0) {
//               result["Accessories"].push({ id: product.id, price: product.price, sub_price: product.sub_price })
//             }
//             else {
//               result["Individual Items"].push({ id: product.id, price: product.price, sub_price: product.sub_price })
//             }
//           });
//           this.products[this.currentCurr] = { currency: this.currentCurr.toLowerCase(), ...result }
//         },
//         complete: () => {
//           console.log(JSON.stringify(this.products));
//         }
//       }));
//   }

//   ngOnInit() {
//     this.titleService.setTitle(`${this.store.get("bankName")}|Customer Login`);
//     this.loadProducts();
//   }

//   ngOnDestroy(): void {
//     this.clearSubscription();
//   }




//   handleLogin() {

//     this.clearSubscription();
//     // this.toggleLoaders(true);
//     // this.formGroup.disable();
//     // this.addSubscription(
//     //   this.authService.login(this.formGroup.value, "users/login").subscribe(
//     //     response => {
//     //       const { data } = response;
//     //       this.hideAlert = false;
//     //       this.showMessage(
//     //         "Redirecting you...",
//     //         "Log in successful",
//     //         "success"
//     //       );
//     //       this.authService.setAuthenticatedUser(data);
//     //       this.store.set("user", this.authService.getAuthenticatedUser());
//     //       this.router.navigateByUrl(this.portalUrl);
//     //     },
//     //     error => {
//     //       this.handleError(error);
//     //       this.formGroup.enable();
//     //     }
//     //   )
//     // );
//   }
// }
