import { Injectable } from "@angular/core";

import { CURRENCY, BANK_NAME, TRANSACTION_SUFFIX } from "../utils/constants";
import { Title } from "@angular/platform-browser";

@Injectable({
  providedIn: "root"
})
export class Store {
  private initialState = {
    currency: CURRENCY,
    bankName: BANK_NAME,
    transactionSuffix: TRANSACTION_SUFFIX,
    header: "Statement",
    user: {},
    menu: {
      nav: false,
      receipt: false
    }
  };

  constructor(private titleService: Title) {}

  public set(key: string, value: any): void {
    this.initialState[key] = value;
  }

  public get(key: string): any {
    return this.initialState[key];
  }

  toggleMenu(key: string): void {
    this.initialState.menu[key] = !this.initialState.menu[key];
  }

  hideMenus(): void {
    this.initialState.menu.nav = false;
    this.initialState.menu.receipt = false;
  }

  setHeader(title: string): void {
    this.titleService.setTitle(`${title}|${this.initialState.bankName}`);
    this.initialState.header = title;
  }
}
