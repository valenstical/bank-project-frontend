import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CloudinaryWidget, ScriptLoaderService } from "ng-valibrary";

import { Store } from "../../services/store";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-profile-image",
  templateUrl: "./profile-image.component.html"
})
export class ProfileImageComponent {
  @Input() src: string;
  @Input() showLoader = false;

  @Output() uploaded: EventEmitter<string> = new EventEmitter();

  widget: any;
  uploading = false;

  constructor(
    public store: Store,
    private scriptLoaderService: ScriptLoaderService
  ) {}

  configureWidget(): void {
    this.widget = new CloudinaryWidget(
      (url: string | any) => {
        this.uploaded.emit(url);
        this.uploading = false;
      },
      () => {
        this.uploading = false;
      },
      {
        cloudName: environment.CLOUDINARY_KEY,
        uploadPreset: "bankproject",
        clientAllowedFormats: ["jpg", "png", "jpeg", "gif"],
        multiple: false,
        sources: ["local"],
        cropping: true,
        resourceType: "image",
        maxImageWidth: 500,
        maxImageHeight: 500,
        croppingDefaultSelectionRatio: 0.8,
        croppingAspectRatio: 1
      }
    );
  }

  uploadFile() {
    this.uploading = true;
    if (!this.widget) {
      this.scriptLoaderService.load("cloudinary").then(_ => {
        this.configureWidget();
        this.widget.open();
      });
    } else {
      this.widget.open();
    }
  }
}
