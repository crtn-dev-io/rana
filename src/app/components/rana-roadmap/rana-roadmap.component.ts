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
      label: "Création du site web",
      icon: "assets/img/checkmark--success.svg",
      chips: [
        {
          label: "DEV",
        },
      ],
    },
    {
      label: "Design des premiers NFTs",
      icon: "assets/img/checkmark--success.svg",
      chips: [
        {
          label: "DESIGN",
        },
      ],
    },
    {
      label: "Création du compte Ranadventure",
      icon: "assets/img/checkmark--success.svg",
      chips: [
        {
          label: "WAX",
        },
        {
          label: "TWITTER",
        },
      ],
    },
  ];

  /**
   * What's coming
   */
  roadmapNext: RoadMap[] = [
    {
      label: "Création des premiers strips",
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
