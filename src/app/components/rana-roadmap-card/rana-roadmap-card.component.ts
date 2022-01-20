import { Component, Input, OnInit } from "@angular/core";
import { RoadMap } from "../rana-roadmap/rana-roadmap.component";

@Component({
  selector: "rana-roadmap-card",
  templateUrl: "./rana-roadmap-card.component.html",
  styleUrls: ["./rana-roadmap-card.component.scss"],
})
export class RanaRoadmapCardComponent implements OnInit {
  /**
   * Icon
   */
  @Input()
  content!: RoadMap;

  constructor() {}

  ngOnInit(): void {}
}

export type Chip = {
  label: string;
  link?: string;
};
