import { Component, Input, OnInit } from "@angular/core";
import { Chip } from "../rana-roadmap-card/rana-roadmap-card.component";

@Component({
  selector: "rana-chip",
  templateUrl: "./rana-chip.component.html",
  styleUrls: ["./rana-chip.component.scss"],
})
export class RanaChipComponent implements OnInit {
  /**
   * Chip to retrieve informations from
   */
  @Input()
  chip!: Chip;

  constructor() {}

  ngOnInit(): void {}

  /**
   * Redirect if chip contains link
   * @param link 
   */
  redirectLink(link?: string): void {
    if (!link) return;
    window.open(link, "_blank");
  }
}
