import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "rana-card",
  templateUrl: "./rana-card.component.html",
  styleUrls: ["./rana-card.component.scss"],
})
export class RanaCardComponent implements OnInit {
  /**
   * Icon to display
   */
  @Input()
  icon!: string;

  /**
   * Label to display
   */
  @Input()
  label!: string;

  /**
   * Content of the card
   */
  @Input()
  content!: string;

  constructor() {}

  ngOnInit(): void {}
}
