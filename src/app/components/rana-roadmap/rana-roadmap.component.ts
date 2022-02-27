import { Component, OnInit } from "@angular/core";
import { Chip } from "../rana-roadmap-card/rana-roadmap-card.component";

@Component({
  selector: "rana-roadmap",
  templateUrl: "./rana-roadmap.component.html",
  styleUrls: ["./rana-roadmap.component.scss"],
})
export class RanaRoadmapComponent implements OnInit {
  /**
   * Roadmap to iterate
   */
  roadmap: RoadMap[] = [
    {
      label: "COMPONENTS.ROADMAP.CARD.FIRST_LABEL",
      icon: "assets/img/checkmark--success.svg",
      chips: [
        {
          label: "DEV",
        },
      ],
    },
    {
      label: "COMPONENTS.ROADMAP.CARD.SECOND_LABEL",
      icon: "assets/img/checkmark--success.svg",
      chips: [
        {
          label: "DESIGN",
        },
      ],
    },
    {
      label: "COMPONENTS.ROADMAP.CARD.THIRD_LABEL",
      icon: "assets/img/checkmark--success.svg",
      chips: [
        {
          label: "WAX",
          link: "https://wax.atomichub.io/profile/ranadventure"
        },
        {
          label: "TWITTER",
          link: "https://twitter.com/RANADVENTURE"
        },
      ],
    },
  ];

  /**
   * What's coming
   */
  roadmapNext: RoadMap[] = [
    {
      label: "COMPONENTS.ROADMAP.CARD.FIFTH_LABEL",
      icon: "assets/img/time--grey.svg",
      chips: [
        {
          label: "DESIGN",
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  /**
   * Redirect to given website
   * @param path 
   */
  redirectWebsite(path: string) {
    window.open(path, "_blank");
  }
}

export type RoadMap = {
  label: string;
  icon: string;
  chips?: Chip[];
};
