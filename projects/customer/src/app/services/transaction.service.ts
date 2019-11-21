import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpService, ResponseData } from "ng-valibrary";

@Injectable({
  providedIn: "root"
})
export class TransactionService {
  constructor(private httpService: HttpService) {}

  getBanks(): Observable<ResponseData> {
    return this.httpService.get("banks");
  }
}
