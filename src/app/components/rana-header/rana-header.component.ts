import { Component, OnInit } from "@angular/core";

const RANA_URL_WAX: string = "https://wax.atomichub.io/profile/ranadventure";

@Component({
  selector: "rana-header",
  templateUrl: "./rana-header.component.html",
  styleUrls: ["./rana-header.component.scss"],
})
export class RaHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  /**
   * Redirect to the wax website, in another tab
   */
   redirectRana(): void {
    window.open(RANA_URL_WAX, "_blank");
  }
}
