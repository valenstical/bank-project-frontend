import { BaseComponent, ResponseData, HttpService } from "ng-valibrary";
import { FormGroup } from "@angular/forms";

export class RequestComponent extends BaseComponent {
  formGroup: FormGroup;

  constructor(public httpService: HttpService) {
    super();
  }

  handleSuccess(response: ResponseData) {
    this.hideAlert = false;
    this.showMessage(response.message, "", "success");
    this.toggleLoaders(false);
    this.formGroup.enable();
  }

  handleError(e: any): void {
    super.handleError(e);
    this.formGroup.enable();
  }
  makeRequest(endpoint: string, method: string): void {
    this.formGroup.disable();
    this.toggleLoaders(true);

    this.addSubscription(
      this.httpService
        .request(endpoint, this.formGroup.value, method)
        .subscribe({
          next: (response: ResponseData) => {
            this.handleSuccess(response);
          },
          error: e => {
            this.handleError(e);
          }
        })
    );
  }
}
