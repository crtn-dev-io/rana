import { Component, OnInit } from "@angular/core";

const RANA_URL_WAX: string = "https://wax.atomichub.io/profile/ranadventure";

@Component({
  selector: "rana-bottom",
  templateUrl: "./rana-bottom.component.html",
  styleUrls: ["./rana-bottom.component.scss"],
})
export class RanaBottomComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  /**
   * Redirect to the wax website, in another tab
   */
  redirectRana(): void {
    window.open(RANA_URL_WAX, "_blank");
  }
}
