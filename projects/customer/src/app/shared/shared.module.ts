import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  SelectModule,
  InputModule,
  ButtonModule,
  AlertModule
} from "ng-valibrary";

import { ProfileImageComponent } from "./profile-image/profile-image.component";

@NgModule({
  declarations: [ProfileImageComponent],
  imports: [
    CommonModule,
    RouterModule,
    SelectModule,
    InputModule,
    AlertModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ProfileImageComponent,
    RouterModule,
    SelectModule,
    AlertModule,
    InputModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
