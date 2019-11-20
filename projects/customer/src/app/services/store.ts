import { Injectable } from "@angular/core";

import { TRANSACTION, CURRENCY, BANK_NAME } from "../utils/constants";
import { Title } from "@angular/platform-browser";

@Injectable({
  providedIn: "root"
})
export class Store {
  public CONSTANTS = { TRANSACTION };

  private initialState = {
    currency: CURRENCY,
    summary: {
      balance: {
        total: 0,
        count: 0
      },
      credits: {
        total: 0,
        count: 0
      },
      debits: {
        total: 0,
        count: 0
      }
    },
    bankName: BANK_NAME,
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
