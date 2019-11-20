import { Component, OnInit } from "@angular/core";
import { Store } from "../services/store";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnInit {
  constructor(public store: Store) {}

  ngOnInit() {}
}
