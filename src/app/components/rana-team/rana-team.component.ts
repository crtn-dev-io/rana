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
      name: "COMPONENTS.TEAM.LUMI.NAME",
      description: "COMPONENTS.TEAM.LUMI.DESCRIPTION",
    },
    {
      name: "COMPONENTS.TEAM.ALAINHENRI.NAME",
      description: "COMPONENTS.TEAM.ALAINHENRI.DESCRIPTION",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

type Member = {
  name: string;
  description: string;
};
