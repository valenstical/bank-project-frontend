import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SelectModule, InputModule, ButtonModule } from "ng-valibrary";

import { ProfileImageComponent } from "./profile-image/profile-image.component";

@NgModule({
  declarations: [ProfileImageComponent],
  imports: [
    CommonModule,
    RouterModule,
    SelectModule,
    InputModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ProfileImageComponent,
    RouterModule,
    SelectModule,
    InputModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
