import { Component, Input } from "@angular/core";
import { Store } from "../../services/store";
import { BaseComponent } from "ng-valibrary";

@Component({
  selector: "app-profile-image",
  templateUrl: "./profile-image.component.html"
})
export class ProfileImageComponent extends BaseComponent {
  public src = this.store.get("user").image;

  constructor(public store: Store) {
    super();
  }
}
