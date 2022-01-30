import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "rana-team",
  templateUrl: "./rana-team.component.html",
  styleUrls: ["./rana-team.component.scss"],
})
export class RanaTeamComponent implements OnInit {
  /**
   * Selected member
   */
  @Input()
  selectedMember: string = "lumi";

  /**
   * List of the team
   */
  members: Member[] = [
    {
      name: "Lümi",
      description:
        "Grande illustratrice Banano, elle se sert de ses petits doigts de dessinatrice pour nous apporter la grenouille la plus mignonne de la blockchain.",
    },
    {
      name: "Alain Henri",
      description:
        "Gourou de l'univers WAX et ingénieur informatique, son expérience permet d'appréhender l'univers des NFTs et de préparer au mieux un projet qui, nous l'espérons, sera couronné de succès autant pour vous que pour nous.",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

type Member = {
  name: string;
  description: string;
};
